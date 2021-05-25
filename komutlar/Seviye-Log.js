const Discord = require("discord.js");
const db = require("quick.db");
let prefix = process.env.prefix;
exports.run = async (client, message, args) => {
  const embed = new Discord.MessageEmbed();
  if (!message.member.hasPermission("ADMINISTRATOR"))
    return message.channel.send(
      `Bu komutu kullanabilmek için \`Yönetici\` iznine sahip olmalısın!`
    );

  if (args[0] === "ayarla") {
    let kanal = message.mentions.channels.first();
    const hata = new Discord.MessageEmbed()
      .setColor("#3f007f")
      .setAuthor(client.user.username)
      .setDescription(`Yanlış Kullanım **${prefix}seviye-log ayarla #kanal**`)
      .setFooter(`🔮 Tüm Hakları Saklıdır.`);
    if (!kanal) return message.channel.send(hata);

    db.set(`svlog_${message.guild.id}`, kanal.id);

    const motion = new Discord.MessageEmbed()
      .setColor("#3f007f")
      .setAuthor(client.user.username)
      .setDescription(
        `\`#${kanal.name}\` **Adlı Kanala Seviye Atlama Olarak Ayarlandı**`
      )
      .setFooter(`🔮 Tüm Hakları Saklıdır.`);
    return message.channel.send(motion);
  }

  if (args[0] === "sıfırla") {
    db.delete(`svlog_${message.guild.id}`);
    const motion = new Discord.MessageEmbed()
      .setColor("#3f007f")
      .setAuthor(client.user.username)
      .setDescription(`**Seviye Log Kanalı Başarıyla Kapatıldı**`)
      .setFooter(`🔮 Tüm Hakları Saklıdır.`);
    return message.channel.send(motion);
  }

  const motion = new Discord.MessageEmbed()
    .setColor("#3f007f")
    .setAuthor(client.user.username)
    .setDescription(`Yanlış Kullanım **${prefix}seviye-log ayarla/sıfırla**`)
    .setFooter(`🔮 Tüm Hakları Saklıdır.`);
  if (!args[0]) return message.channel.send(motion);

  return message.channel.send(embed);
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["help"],
  permLevel: 0
};

exports.help = {
  name: "seviye-log",
  description: "Taslak",
  usage: "Taslak"
};
