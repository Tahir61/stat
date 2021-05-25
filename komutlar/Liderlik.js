const Discord = require("discord.js"),
  db = require("quick.db");

exports.run = async (client, message, args) => {
  try {
    async function getLeaderboard(page, per_page) {
      let money = db
        .all()
        .filter(i => i.ID.startsWith(`para_${message.guild.id}`))
        .sort((a, b) => b.data - a.data);
      var page = page || 1,
        per_page = per_page || 10,
        offset = (page - 1) * per_page,
        paginatedItems = money.slice(offset).slice(0, per_page),
        total_pages = Math.ceil(money.length / per_page);

      let id = money.slice(`para_${message.guild.id}`);

      var leaderboardMessage = "";
      let i = 0;
      for (i in paginatedItems) {
        i++;
        //if (i > 10) return;
        leaderboardMessage += `**${i}.**  <@!${
          money[i - 1].ID.split("_")[2]
        }> •** ${paginatedItems[i - 1].data} **Puan\n`;
      }

      let end = {
        page: page,
        per_page: per_page,
        pre_page: page - 1 ? page - 1 : null,
        next_page: total_pages > page ? page + 1 : null,
        total: money.length,
        total_pages: total_pages,
        data: paginatedItems,
        message: leaderboardMessage
      };

      const topembed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setThumbnail(
          "https://media.discordapp.net/attachments/840710187605426176/845275847099547688/l3d3rLj.png?width=342&height=342"
        )
        .setAuthor(
          `●▬▬▬▬【 ${message.guild.name} Liderlik Tablo 】▬▬▬▬▬●`,
          message.guild.iconURL
        )
        .setDescription(leaderboardMessage || "YOK!");
      return message.channel.send(topembed);
    }
    getLeaderboard(1, 10);
  } catch (err) {
    const embed = new Discord.MessageEmbed()
      .setDescription("Sanırım bir sorun var! Bunu yetkililere bildir!")
      .setColor("RED")
      .setTimestamp();
    message.channel.send(embed);
  }
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "liderlik",
  description: "liderlik-tablosu",
  usage: "liderlik-tablosu"
};
