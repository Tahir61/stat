const Discord = require("discord.js"),
      db = require(`quick.db`)

const ayarlar = require('../ayarlar.json')

let gold = ayarlar.goldüye
exports.run = async (client, message, args) => {
  if(message.author.id !== '802181483170103316')return message.channel.send('Bu komut sadece bot yapımcılarına aittir.')
  let kişi = message.mentions.users.first()
  let para = args[1]
  if(!kişi) return message.reply(`Lütfen birini etiketle!`)
  if(!para) return message.reply(`Lütfen bir puan gir!`)
let enis = client.users.cache.get(kişi.id)
client.channels.cache.get(gold).send(` ${enis.tag} adlı şahsa **${para}** puan eklendi!`)
  message.channel.send(`<@${kişi.id}> adlı şahsa **${para}** puan eklendi! `)
  db.add(`para_${message.guild.id}_${kişi.id}`, +para);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["puanekle"],
  permLevel: 4
};

exports.help = {
  name: "puan-ekle",
  description: "puan-ekle",
  usage: "puan-ekle"
};