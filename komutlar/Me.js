const db = require("quick.db");
const { MessageEmbed } = require("discord.js");

const moment = require("moment");
require("moment-duration-format");
moment.locale("tr");

exports.run = async (client, message, args) => {
  let member =
    message.mentions.users.first() ||
    message.guild.members.cache.get(args[0]) ||
    message.author;

  let dataMessage = (await db.get(`messageData.${member.id}.channel`)) || {};
  let dataVoice = (await db.get(`voiceData.${member.id}.channel`)) || {};

  let messageData = Object.keys(dataMessage)
    .map(id => {
      return {
        channelID: id,
        totalMessage: dataMessage[id]
      };
    })
    .sort((a, b) => b.totalMessage - a.totalMessage);

  let voiceData = Object.keys(dataVoice)
    .map(id => {
      return {
        channelID: id,
        totalTime: dataVoice[id]
      };
    })
    .sort((a, b) => b.totalTime - a.totalTime);

  let dataMessage0 = (await db.get(`messageData.${member.id}.times`)) || [
    { time: 0, puan: 0 },
    { time: 0, puan: 0 }
  ];
  let dataVoice0 = (await db.get(`voiceData.${member.id}.times`)) || [
    { time: 0, puan: 0 },
    { time: 0, puan: 0 }
  ];

  let messageData0 = Object.values(dataMessage0).map(id => {
    return {
      time: id.time,
      puan: id.puan
    };
  });
  let voiceData0 = Object.values(dataVoice0).map(id => {
    return {
      time: id.time,
      puan: id.puan
    };
  });

  let message14 = messageData0
    .filter(data => Date.now() - 86400000 * 30 < data.time)
    .reduce((a, b) => a + b.puan, 0);
  let message7 = messageData0
    .filter(data => Date.now() - 86400000 * 7 < data.time)
    .reduce((a, b) => a + b.puan, 0);
  let message24 = messageData0
    .filter(data => Date.now() - 86400000 < data.time)
    .reduce((a, b) => a + b.puan, 0);
  let totalmessage = messageData0
    .filter(data => Date.now())
    .reduce((a, b) => a + b.puan, 0);

  let ses14 = voiceData0
    .filter(data => Date.now() - 86400000 * 30 < data.time)
    .reduce((a, b) => a + b.puan, 0);
  let ses7 = voiceData0
    .filter(data => Date.now() - 86400000 * 7 < data.time)
    .reduce((a, b) => a + b.puan, 0);
  let ses24 = voiceData0
    .filter(data => Date.now() - 86400000 < data.time)
    .reduce((a, b) => a + b.puan, 0);
  let totalVoice = voiceData0
    .filter(data => Date.now())
    .reduce((a, b) => a + b.puan, 0);

  
  if(member.bot) return message.channel.send(new MessageEmbed() .setColor("RANDOM")
 .setAuthor(client.user.username)
     .setDescription(`Yanlış Kullanım Sebeb: Botta Profil Ne Yazıkkı Yok :(`)
     .setFooter(`🔮 Tüm Hakları Saklıdır.`))
  const embed = new MessageEmbed()
    .setColor("RANDOM")
    .setThumbnail(member.avatarURL({ dynamic: true }))
    .addField(
      `●▬▬▬▬▬▬▬▬【 Kullanıcı Bilgi 】▬▬▬▬▬▬▬▬▬●`,
      `**AD:** \`${member.tag}\` \n **ID:** \`${
        member.id
      }\` \n **Giriş Tarihi:** \`${moment
        .utc(message.guild.members.cache.get(member.id).joinedTimestamp)
        .format("D MMMM YYYY")}\`\n **Puan:** \`0\``,
      false
    )
    .addField(
      `●▬▬▬▬▬▬【 Stat - İstatistik Bilgileri 】▬▬▬▬▬▬▬● \n :star: Genel Ses Ve Mesaj İstatistikleri`,
      `⦁ **Ses:** \`${moment
        .duration(totalVoice)
        .format(
          "HH [Saat], mm [Dakika]"
        )} \` \n ⦁ **Mesaj:** \`${totalmessage}\` Mesaj`,
      false
    )
    .addField(
      `🌙 Günlük Ses Ve Mesaj İstatistikleri`,
      `⦁ **Ses:** \`${moment
        .duration(ses24)
        .format(
          "HH [Saat], mm [Dakika]"
        )}  \` \n⦁ **Mesaj:** \`${message24}\` Mesaj `,
      false
    )
    .addField(
      `✨ Haftalık Ses Ve Mesaj İstatistikleri`,
      `⦁ **Ses:** \`${moment
        .duration(ses7)
        .format(
          "HH [Saat], mm [Dakika]"
        )} \` \n ⦁ **Mesaj:** \`${message7}\` Mesaj`,
      false
    )
    .addField(
      `📅 Aylık Ses Ve Mesaj İstatistikleri`,
      `⦁ **Ses:** \`${moment
        .duration(ses14)
        .format(
          "HH [Saat], mm [Dakika]"
        )} \` \n ⦁ **Mesaj:** \`${message14}\` Mesaj`,
      false
    )
    .addField(
      `●▬▬▬▬▬【 Stat - İstatistik Kanal Bilgileri 】▬▬▬▬▬▬●  \n 🔊 Aktif Olduğun Ses Kanalı`,
      `${voiceData[0] ? `<#${voiceData[0].channelID}>` : "Veri Yok!"}: ${
        voiceData[0]
          ? moment
              .duration(voiceData[0].totalTime)
              .format("HH [Saat], mm [Dakika]")
          : "Veri Yok!"
      }`,
      false
    )
    .addField(
      `💬 Aktif Olduğun Mesaj Kanalı`,
      `${messageData[0] ? `<#${messageData[0].channelID}>` : "Veri Yok"}: ${
        messageData[0] ? messageData[0].totalMessage : 0
      } Mesaj`,
      false
    );

  message.channel.send(embed).then(async message => {
     await message.react("Ⓜ️"), message.react("🇪")
  })
                                   };


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "me"
};
