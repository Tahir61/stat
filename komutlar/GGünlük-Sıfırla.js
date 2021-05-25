const db = require("quick.db");
const Discord = require("discord.js");

const ayarlar = require('../ayarlar.json')

let gold = ayarlar.goldüye
exports.run = (client, message, args) => {
  let şahıs = message.mentions.users.first();
  
  if (!şahıs) return message.channel.send("⛔️ Sıfırlanacak şahsı etiketleyiniz.");

  let enis = client.users.get(şahıs.id)
  client.channels.get(gold).send(`<@${şahıs.id}> Günlük **Gold** Puan Ödülü Sıfırlandı!`)
  message.channel.send(`<@${şahıs.id}> Günlük **Gold** Puan süresı sıfırlandı!`);
  db.delete(`lastDaily_${şahıs.id}`);
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 4,
  kategori: "yapımcı"
};
exports.help = {
  name: "günlük-sıfırla",
  description: "günlük-süre",
  usage: "günlük-süre"
};
