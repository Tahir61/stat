const Discord = require("discord.js");
const db = require(`quick.db`);
const ayarlar = require('../ayarlar.json')

let puan = ayarlar.goldüye
exports.run = async (client, message, args) => {
  if (message.author.id !== "802181483170103316")
    return message.channel.send("Bu komut sadece bot yapımcılarına aittir.");
  let kişi = message.mentions.users.first();
  let para = args[1];
  if (!kişi) return message.reply(`Lütfen birini etiketle!`);
  if (!para) return message.reply(`Lütfen bir puan gir!`);
  let enis = client.users.cache.get(kişi.id);
  client.channels.cache
    .get(`${puan}`)
    .send(`${enis.tag} adlı şahıstan **${para}** puan silindi!`);
  message.channel.send(`<@${kişi.id}> adlı şahstan **${para}** puan alındı! `);
  db.add(`para_${message.guild.id}_${kişi.id}`, -para);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["puansil"],
  permLevel: 4
};

exports.help = {
  name: "puan-sil",
  description: "puan-sil",
  usage: "puan-sil"
};
