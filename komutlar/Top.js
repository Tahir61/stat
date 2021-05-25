const db = require('quick.db');
const { MessageEmbed } = require('discord.js')

const moment = require('moment')
require('moment-duration-format')
moment.locale('tr')

     
exports.run = async(client, message, args) => {
  
    let dataMessage = await db.get(`messageData`) || {};
        let dataVoice = await db.get(`voiceData`) || {};

        const topMessage = Object.keys(dataMessage).map(id => {
            return {
                userID: id,
                data: Object.values(dataMessage[id].channel || {}).reduce((a, b) => a + b, 0)
            }
        }).sort((a, b) => b.data - a.data).slice(0, 10).map((data, i) => `${message.guild.members.cache.get(data.userID)}: \`${data.data} Mesaj\``)

        const topVoice = Object.keys(dataVoice).map(id => {
            return {
                userID: id,
                data: Object.values(dataVoice[id].channel || {}).reduce((a, b) => a + b, 0)
            }
        }).sort((a, b) => b.data - a.data).slice(0, 10).map((data, i) => `${message.guild.members.cache.get(data.userID)}: \`${moment.duration(data.data).format("M [Ay], W [Hafta], DD [Gün], HH [Saat], mm [Dakika], ss [Saniye]")}\``)

        const embed = new MessageEmbed()
            .setColor("RANDOM")
            .addField(`●▬▬▬▬【 Mesaj Kanalları Sıralaması İLK 10 】▬▬▬▬▬●`, topMessage.length >= 1 ? topMessage : "Veri Yok!")
            .addField(`●▬▬▬▬【 Ses Kanalları Sıralaması İLK 10 】▬▬▬▬▬●`, topVoice.length >= 1 ? topVoice : "Veri Yok!")
            .setThumbnail("https://media.discordapp.net/attachments/840710187605426176/844960237587791922/Orlpqz.png?width=320&height=320")
            
     
        return message.channel.send(embed).then(async message => {
          await message.react("🇹"), message.react("🅾️"), message.react("🅿️")
        })

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "top"
};