const Discord = require("discord.js")
const db = require("quick.db")  
const ms = require("parse-ms")

const ayarlar = require('../ayarlar.json')

let gold = ayarlar.goldüye
exports.run = async (bot, message, args) => {
  let cooldown = 1.728e8,
    amount = Math.floor(Math.random() * 10) + 5;

  let lastDaily = await db.fetch(`lastDaily_${message.author.id}`);
  if (lastDaily !== null && cooldown - (Date.now() - lastDaily) > 0) {
    let timeObj = ms(cooldown - (Date.now() - lastDaily));

    const embed = new Discord.MessageEmbed()
      .setTitle("Hata!")
      .setColor("BLACK")
      .setDescription(
        `Günlük ödülünü zaten aldın!\nYeniden almana: **${timeObj.hours} saat ${timeObj.minutes} dakika**!`
      );
    message.channel.send(embed);
    return;
  } else {
    const embed = new Discord.MessageEmbed()
      .setTitle("Günlük ödülün!")
      .setDescription(`Günlük Ödülün: **${amount}** Puan`)
      .setColor("BLACK");
    message.channel.send(embed);
let enis = bot.users.cache.get(message.member.id)
bot.channels.cache.get(gold).send(`${enis.tag} günlük ödülünü açtı **${amount}** puan cikti!`)
    db.set(`lastDaily_${message.author.id}`, Date.now());
    db.add(`para_${message.guild.id}_${message.member.id}`, amount);
  }
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
  kategori: "puan"
};

exports.help = {
  name: "günlük",
  description: "Günlük ödül alırsınız.",
  usage: "günlük"
};
