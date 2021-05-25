const Discord = require("discord.js");
const client = new Discord.Client();
const chalk = require("chalk");
const db = require("quick.db");
const http = require("http");
const express = require("express");
const { Player } = require("discord-player");
const app = express();
const moment = require("moment");
var Jimp = require("jimp");

const { Client, Util } = require("discord.js");
const fs = require("fs");
require("./util/eventLoader.js")(client);
client.cooldowns = new Discord.Collection();
const queue = new Map();

require("events").EventEmitter.prototype._maxListeners = 70;
require("events").defaultMaxListeners = 70;
process.on("warning", function(err) {
  if ("MaxListenersExceededWarning" == err.name) {
    process.exit(1);
  }
});
function foo() {
  return new Promise((resolve, reject) => {
    return resolve();
  });
}
async function foobar() {
  foobar();
  foo()
    .then(() => {})
    .catch(() => {});
  foobar().catch(console.error);
}

var prefix = process.env.prefix;

//-----------------------------------------------\\
app.get("/", (request, response) => {
  response.sendStatus(200);
});
app.listen(8000);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);
//-----------------------------------------------\\

const log = message => {
  console.log(`${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir("./komutlar/", (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`Yüklenen komut: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.elevation = message => {
  if (!message.guild) {
    return;
  }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === process.env.sahip) permlvl = 4;
  return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });

client.on("warn", e => {
  console.log(chalk.bgYellow(e.replace(regToken, "that was redacted")));
});

client.on("error", e => {
  console.log(chalk.bgRed(e.replace(regToken, "that was redacted")));
});

client.login(process.env.TOKEN);

////-----------------------------\\\\\\\\\

//Stat

client.on("message", async message => {
  if (
    !message.guild ||
    message.author.bot ||
    message.content.startsWith(client.prefix)
  )
    return;
  db.add(`messageData.${message.author.id}.channel.${message.channel.id}`, 1);
  db.push(`messageData.${message.author.id}.times`, {
    time: Date.now(),
    puan: 1
  });
});

const Activites = new Map();

client.on("voiceStateUpdate", (oldState, newState) => {
  if (
    (oldState.member && oldState.member.user.bot) ||
    (newState.member && newState.member.user.bot)
  )
    return;
  if (!oldState.channelID && newState.channelID) {
    Activites.set(oldState.id, Date.now());
  }
  let data;
  if (!Activites.has(oldState.id)) {
    data = Date.now();
    Activites.set(oldState.id, data);
  } else data = Activites.get(oldState.id);

  let duration = Date.now() - data;
  if (oldState.channelID && !newState.channelID) {
    Activites.delete(oldState.id);
    db.add(`voiceData.${oldState.id}.channel.${oldState.channelID}`, duration);
    db.push(`voiceData.${oldState.id}.times`, {
      time: Date.now(),
      puan: duration
    });
  } else if (oldState.channelID && newState.channelID) {
    Activites.set(oldState.id, Date.now());
    db.add(`voiceData.${oldState.id}.channel.${oldState.channelID}`, duration);
    db.push(`voiceData.${oldState.id}.times`, {
      time: Date.now(),
      puan: duration
    });
  }
});

client.on("guildMemberAdd", async member => {
  const db = require("croxydb");
  const { MessageAttachment } = require("discord.js");
  let gkanal = await db.fetch(`rgiris_${member.guild.id}`);
  const gözelkanal = client.channels.cache.get(gkanal);
  if (!gözelkanal) return; //dcs ekibi
  let username = member.user.username;
  if (gözelkanal === undefined || gözelkanal === null) return;
  if (gözelkanal.type === "text") {
    const bg = await Jimp.read(
      "https://cdn.discordapp.com/attachments/596076560293953565/613821209880297502/giris_yapt.png"
    );
    const userimg = await Jimp.read(
      member.user.displayAvatarURL({ format: "png" })
    );
    var font;
    if (member.user.tag.length < 15)
      font = await Jimp.loadFont(Jimp.FONT_SANS_128_WHITE);
    else if (member.user.tag.length > 15)
      font = await Jimp.loadFont(Jimp.FONT_SANS_64_WHITE);
    else font = await Jimp.loadFont(Jimp.FONT_SANS_32_WHITE);
    await bg.print(font, 430, 170, member.user.tag);
    await userimg.resize(300, 300);
    await bg.composite(userimg, 50, 20).write("./img/" + member.id + ".png");
    setTimeout(function() {
      gözelkanal.send(new MessageAttachment("./img/" + member.id + ".png"));
    }, 3000);
    setTimeout(function() {
      fs.unlink("./img/" + member.id + ".png");
    }, 6000);
  }
});
client.on("guildMemberRemove", async member => {
  const db = require("croxydb");
  const { MessageAttachment } = require("discord.js");
  let gkanal = await db.fetch(`rgiris_${member.guild.id}`);
  const gözelkanal = client.channels.cache.get(gkanal);
  if (!gözelkanal) return; //dcs ekibi
  let username = member.user.username;
  if (gözelkanal === undefined || gözelkanal === null) return;
  if (gözelkanal.type === "text") {
    const bg = await Jimp.read(
      "https://media.discordapp.net/attachments/596076560293953565/613821573249499177/cksyapt.png"
    );
    const userimg = await Jimp.read(member.user.avatarURL({ format: "png" }));
    var font;
    if (member.user.tag.length < 15)
      font = await Jimp.loadFont(Jimp.FONT_SANS_128_WHITE);
    else if (member.user.tag.length > 15)
      font = await Jimp.loadFont(Jimp.FONT_SANS_64_WHITE);
    else font = await Jimp.loadFont(Jimp.FONT_SANS_32_WHITE);
    await bg.print(font, 430, 170, member.user.tag);
    await userimg.resize(300, 300);
    await bg.composite(userimg, 50, 20).write("./img/" + member.id + ".png");
    setTimeout(function() {
      gözelkanal.send(new MessageAttachment("./img/" + member.id + ".png"));
    }, 3000);
    setTimeout(function() {
      fs.unlink("./img/" + member.id + ".png");
    }, 6000);
  }
});

client.on("message", async message => {
  const request = require("node-superfetch");
  let dakdest = await db.fetch(`sğre11_${message.member.id}`);
  let timeout = 1800000;
  const ms = require("parse-ms");
  let amount = Math.floor(Math.random() * 5) + 2;
  if (dakdest !== null && timeout - (Date.now() - dakdest) > 0) {
    let time = ms(timeout - (Date.now() - dakdest));
  } else {
    if (message.member.bot) return;
    if (message.content.length > 1) {
      db.add(`para_${message.guild.id}_${message.author.id}`, +amount);
      db.set(`sğre11_${message.author.id}`, Date.now());
      client.channels.cache
        .get("845267745368571984")
        .send(
          `:rosette: ` +
            message.member.user.tag +
            ` **` +
            amount +
            `** puan kazandı!`
        );
    }
  }
});

client.cooldown = new Discord.Collection();
client.config = {
  cooldown: 1 * 1000
};

client.on("message", async message => {
  const db = require("quick.db");
  let kanal = await db.fetch(`svlog_${message.guild.id}`)
  if (!message.guild || message.author.bot) return;
  // XP
  exp(message);
  function exp(message) {
    if (
      !client.cooldown.has(`${message.author.id}`) ||
      Date.now() - client.cooldown.get(`${message.author.id}`) >
        client.config.cooldown
    ) {
      let exp = db.add(`exp_${message.author.id}`, 1);
      let level = Math.floor(0.3 * Math.sqrt(exp));
      let lvl =
        db.get(`level_${message.author.id}`) ||
        db.set(`level_${message.author.id}`, 1);
      if (level > lvl) {
        let newLevel = db.set(`level_${message.author.id}`, level);

        kanal.send(
          `:tada: ${message.author.toString()}, Level atladın yeni levelin ${newLevel}!`
        );
      }
      client.cooldown.set(`${message.author.id}`, Date.now());
    }
  }
});
