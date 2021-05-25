const Discord = require("discord.js")
const db = require("quick.db")


const ayarlar = require('../ayarlar.json')

let gold = ayarlar.goldüye
exports.run = async(client, message, args) => {
  if (message.author.id != process.env.sahip) {
    return message.channel.send("Bu komut sahibime özdür.");
  }
  
let kisi = message.mentions.users.first()
if(!kisi){
message.reply(`Lütfen birini taglayınız.`)
return
}
db.delete(`gold_${kisi.id}`)
    let enis = client.users.cache.get(kisi.id)
  client.channels.cache.get(gold).send(`${enis.tag} **Gold** yetkisi alındı!`)
message.channel.send(`Başarıyla **${kisi}** adlı şahıs **Gold** üyeden oldu!`)
return
}
exports.conf = {
enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 4,
  kategori: "puan"
}
exports.help = {
name: "gold-çıkar",
  description: "sa",
  usage: "as"
}