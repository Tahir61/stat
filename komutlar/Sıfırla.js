const db = require('quick.db');
const { MessageEmbed } = require('discord.js')

const moment = require('moment')
require('moment-duration-format')
moment.locale('tr')

let prefix = process.env.prefix
     
exports.run = async(client, message, args) => {
    if(message.author.id !== process.env.sahip) return message.channel.send("Bu Komutu Sahibi KullanaBilir Sadece!")
   if(args[0] == "hepsi"){
     db.delete(`messageData`);
     db.delete(`voiceData`);
     return message.channel.send(`Sunucudaki Tüm Veriler Başarılı Bir Şekilde Sıfırlandı.`)
   } else if(args[0] == "yazı"){
     db.delete(`messageData`);
     return message.channel.send(`Sunucudaki Tüm Yazı Verileri Başarılı Bir Şekilde Sıfırlandı.`)
   } else if(args[0] == "ses") {
      db.delete(`voiceData`);
      return message.channel.send(`Sunucudaki Tüm Ses Verileri Başarılı Bir Şekilde Sıfırlandı.`)
   }
     const embed = new MessageEmbed()
     .setColor("RANDOM")
 .setAuthor(client.user.username)
     .setDescription(`Yanlış Kullanım ${prefix}sıfırla hepsi/ses/yazı`)
     .setFooter(`🔮 Tüm Hakları Saklıdır.`)
     return message.channel.send(embed)
     
   }


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "sıfırla"
};