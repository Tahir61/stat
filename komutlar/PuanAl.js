const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async (client, message, args) => {
  if(message.author.id !== '802181483170103316')return message.channel.send('Bu komut sadece bot yapımcılarına aittir.')
let ana = args[0]
if(!ana)return message.channel.send("Miktar Gir")
  message.guild.members.cache.forEach(x => {
    db.add(`para_${message.guild.id}_${x.id}`, -ana)
  })
  message.channel.send("Herkesten Puan Alınıyor.")
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 4,
  kategori: "puan"
};

exports.help = {
  name: "puan-al",
  description: "al",
  usage: "al"
};