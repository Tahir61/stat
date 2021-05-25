const Discord = require("discord.js"); // \n
let site = process.env.site;
let prefix = process.env.prefix;
exports.run = (client, message, args) => {
  const embed = new Discord.MessageEmbed()
    .setTitle(`${client.user.username} | Gelişmiş Sunucu Deniyimi`)
    .setColor("RANDOM")
    .setURL(site)
    .setThumbnail(client.user.avatarURL())
    .setDescription(
      `●▬▬▬▬▬▬▬▬【 Bilgilendirme 】▬▬▬▬▬▬▬▬▬● \n > • | Hey! <@${message.author.id}> **${client.user.username}** Bilgi Menü Hoşgeldin. \n > • | Geçikme Sürem **${client.ws.ping} ms!**`
    )
    .addField(
      `●▬▬▬▬▬▬▬▬【 Kategoriler [8] 】▬▬▬▬▬▬▬▬▬●`,
      `> ・| **Genel - Kullanıcı** Komutlar İçin: 💬 \n > ・| **Yetkili - Yönetici** Komutlar İçin: ⛑️ \n > ・| **GoldÜye - Puan** Komutlar İçin: 🌟 \n > ・| **Vip - Vip Özellikler** Komutlar İçin: 🏆 \n > ・| **İstatistik - Stat** Komutlar İçin: 📊  \n > ・| **Ekonomi - Kumar** Komutlar İçin: 🎰 \n > ・| **Oyunlar - Eğlence** Komutlar İçin: 🎮 \n > ・| **Level Sistem - Rank System** Komutlar İçin: 🎚 \n > ・| **Çekiliş - Events System** Komutlar İçin: 🎉 \n > ・| **Davet - İnvite System** Komutlar İçin: ✉️ \n > ・| **Evcil Hayvan - Cat System** Komutlar İçin: 🐱`,
      false
    )
    .addField(`> 🎓 Bilgi`, `Ana Menü İçin 🏠 Tıkla`, false)
    .addField(
      `> :link: Linkler`,
      `[Botu Ekle](https://discord.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=0)`,
      false
    );
  message.channel.send(embed).then(async msg => {
    await msg.react("🏠").then(r => {
      msg.react("💬").then(r => {
        msg.react("⛑️").then(r => {
          msg.react("🌟").then(r => {
            msg.react("🏆").then(r => {
              msg.react("📊");
              msg.react("🎰");
              msg.react("🎮");
              msg.react("🎚");
              msg.react("🎉");
              msg.react("✉️");
              msg.react("🐱");
              const cs = (reaction, user) =>
                reaction.emoji.name === "🏠" && user.id === message.author.id;
              const cs1 = (reaction, user) =>
                reaction.emoji.name === "💬" && user.id === message.author.id;
              const cs2 = (reaction, user) =>
                reaction.emoji.name === "⛑️" && user.id === message.author.id;
              const cs3 = (reaction, user) =>
                reaction.emoji.name === "🌟" && user.id === message.author.id;
              const cs4 = (reaction, user) =>
                reaction.emoji.name === "🏆" && user.id === message.author.id;
              const cs5 = (reaction, user) =>
                reaction.emoji.name === "📊" && user.id === message.author.id;

              const cs6 = (reaction, user) =>
                reaction.emoji.name === "🎰" && user.id === message.author.id;

              const cs7 = (reaction, user) =>
                reaction.emoji.name === "🎮" && user.id === message.author.id;

              const cs8 = (reaction, user) =>
                reaction.emoji.name === "🎚" && user.id === message.author.id;

              const cs9 = (reaction, user) =>
                reaction.emoji.name === "🎉" && user.id === message.author.id;

              const cs10 = (reaction, user) =>
                reaction.emoji.name === "✉️" && user.id === message.author.id;

              const cs11 = (reaction, user) =>
                reaction.emoji.name === "🐱" && user.id === message.author.id;

              const css = msg.createReactionCollector(cs, {
                time: 100000
              });
              const css1 = msg.createReactionCollector(cs1, {
                time: 100000
              });
              const css2 = msg.createReactionCollector(cs2, {
                time: 100000
              });
              const css3 = msg.createReactionCollector(cs3, {
                time: 100000
              });
              const css4 = msg.createReactionCollector(cs4, {
                time: 100000
              });
              const css5 = msg.createReactionCollector(cs5, {
                time: 100000
              });
              const css6 = msg.createReactionCollector(cs6, {
                time: 100000
              });

              const css7 = msg.createReactionCollector(cs7, {
                time: 100000
              });
              const css8 = msg.createReactionCollector(cs8, {
                time: 100000
              });
              const css9 = msg.createReactionCollector(cs9, {
                time: 100000
              });

              const css10 = msg.createReactionCollector(cs10, {
                time: 100000
              });

              const css11 = msg.createReactionCollector(cs11, {
                time: 100000
              });

              css.on("collect", r => {
                // AnaMenü
                const cse = new Discord.MessageEmbed()
                  .setTitle(
                    `${client.user.username} | Gelişmiş Sunucu Deniyimi`
                  )
                  .setColor("RANDOM")
                  .setURL(site)
                  .setThumbnail(client.user.avatarURL())
                  .setDescription(
                    `●▬▬▬▬▬▬▬▬【 Bilgilendirme 】▬▬▬▬▬▬▬▬▬● \n > • | Hey! <@${message.author.id}> **${client.user.username}** Bilgi Menü Hoşgeldin. \n > • | Geçikme Sürem **${client.ws.ping} ms!**`
                  )
                  .addField(
                    `●▬▬▬▬▬▬▬▬【 Kategoriler [8] 】▬▬▬▬▬▬▬▬▬●`,
                    `> ・| **Genel - Kullanıcı** Komutlar İçin: 💬 \n > ・| **Yetkili - Yönetici** Komutlar İçin: ⛑️ \n > ・| **GoldÜye - Puan** Komutlar İçin: 🌟 \n > ・| **Vip - Vip Özellikler** Komutlar İçin: 🏆 \n > ・| **İstatistik - Stat** Komutlar İçin: 📊  \n > ・| **Ekonomi - Kumar** Komutlar İçin: 🎰 \n > ・| **Oyunlar - Eğlence** Komutlar İçin: 🎮 \n > ・| **Level Sistem - Rank System** Komutlar İçin: 🎚 \n > ・| **Çekiliş - Events System** Komutlar İçin: 🎉 \n > ・| **Davet - İnvite System** Komutlar İçin: ✉️ \n > ・| **Evcil Hayvan - Cat System** Komutlar İçin: 🐱`,
                    false
                  )
                  .addField(`> 🎓 Bilgi`, `Ana Menü İçin 🏠 Tıkla`, false)
                  .addField(
                    `> :link: Linkler`,
                    `[Botu Ekle](https://discord.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=0)`,
                    false
                  );
                msg.edit(cse);
              });

              css1.on("collect", r => {
                const cse = new Discord.MessageEmbed()
                  .setTitle(":speech_balloon: Genel - Kullanıcı")
                  .setColor("RANDOM")
                  .addField(
                    `●▬▬▬▬▬▬▬▬【 Genel - Kullanıcı Komutlar 】▬▬▬▬▬▬▬▬▬●`,
                    `**${prefix}me** Toplam Mesaj Ve Ses İstatistiklerini Ayrıntılı Bilgi Verir. \n **${prefix}top** Mesaj Ve Ses İstatistik LeaderBoard Bilgi Verir. \n **${prefix}günlük** Günlük Hediye Puan Alırsınız. \n **${prefix}kasa** Kasa Alıp Açarsanız Ekstara Puan Kazanbilirsiniz. \n **${prefix}kasalarım** Toplam Ne Kadar Kasan Var Hakkında Ayrıntılı Bilgi Verir. \n **${prefix}market** Marketten Kasa Ve Rol Satın Alabilirsiniz. \n **${prefix}puan** Toplam Ne Kadar Puanınız Var Onu Gösterir. \n **${prefix}leaderboard** Seviye Sıralaması Gösterir. \n **${prefix}rank** Seviye Bilgilerinizi RankCard Olarak Gösterir.`,
                    false
                  )
                  .addField(`> 🎓 Bilgi`, `Ana Menü İçin 🏠 Tıkla`, false);

                msg.edit(cse);
              });

              css2.on("collect", r => {
                const cse = new Discord.MessageEmbed()
                  .setTitle(":helmet_with_cross: Yetkili - Yönetici")
                  .setColor("RANDOM")
                  .addField(
                    `●▬▬▬▬▬▬▬▬【 Yetkili - Yönetici Komutlar 】▬▬▬▬▬▬▬▬▬●`,
                    `**${prefix}giriş-çıkış** Giriş - Çıkış Kanalı Ayarlar.`,
                    false
                  )
                  .addField(`> 🎓 Bilgi`, `Ana Menü İçin 🏠 Tıkla`, false);
                msg.edit(cse);
              });

              css3.on("collect", r => {
                const cse = new Discord.MessageEmbed()
                  .setTitle(":star2: GoldÜye - Puan")
                  .setColor("RANDOM")
                  .addField(
                    `●▬▬▬▬▬▬▬▬【 GoldÜye - Puan Komutlar 】▬▬▬▬▬▬▬▬▬●`,
                    `**${prefix}gold-yap** Etikelenen Kişi GoldÜye Olur. \n **${prefix}gold-çıkar** Etiketlenen Kişi Goldüyelikten Atılır. \n **${prefix}puan-ver** Herkese Girdiginiz Miktar Kadar Puan Verilir. \n **${prefix}puan-al** Herkese Girdiginiz Miktar Kadar Puan Alınır. \n **${prefix}günlük** Günlük Hediye Puan Alırsınız. \n **${prefix}günlük-sıfırla** Etikeletdiginiz Kişinin Günlük Ödülü Sıfırlanır. \n **${prefix}kasa** Kasa Alıp Açarsanız Ekstara Puan Kazanbilirsiniz. \n **${prefix}kasalarım** Toplam Ne Kadar Kasan Var Hakkında Ayrıntılı Bilgi Verir. \n **${prefix}al** Herkesten Kasa Alır. \n **${prefix}market** Marketten Kasa Ve Rol Satın Alabilirsiniz. \n **${prefix}puan** Toplam Ne Kadar Puanınız Var Onu Gösterir. \n **${prefix}puan-sil** Yazdıgınız Rakam Kadar Puan Siler \n **${prefix}puan-ekle** Yazdıgınız Kadar Puan Ekler \n **${prefix}liderlik** Puan Sıralamasına Bakarsınız.`,
                   false
                  )
                  .addField(`> 🎓 Bilgi`, `Ana Menü İçin 🏠 Tıkla`, false);
                msg.edit(cse);
              });

              css4.on("collect", r => {
                const cse = new Discord.MessageEmbed()
                  .setTitle(":trophy: Vip - Vip Özellikler")
                  .setColor("RANDOM")
                  .addField(
                    `●▬▬▬▬▬▬▬▬【 VIP - VIP Özellikler Komutlar 】▬▬▬▬▬▬▬▬▬●`,
                    `Komutlar`,
                    false
                  )
                  .addField(`> 🎓 Bilgi`, `Ana Menü İçin 🏠 Tıkla`, false);
                msg.edit(cse);
              });

              css5.on("collect", r => {
                const cse = new Discord.MessageEmbed()
                  .setTitle(":bar_chart: İstatistik - Stat")
                  .setColor("RANDOM")
                  .addField(
                    `●▬▬▬▬▬▬▬▬【 İstatistik - Stat Komutlar 】▬▬▬▬▬▬▬▬▬●`,
                    `**${prefix}me** Toplam Mesaj Ve Ses İstatistiklerini Ayrıntılı Bilgi Verir. \n **${prefix}top** Mesaj Ve Ses İstatistik LeaderBoard Bilgi Verir. \n **${prefix}sıfırla** Tüm İstatistikleri Sıfırlar.`,
                    false
                  )
                  .addField(`> 🎓 Bilgi`, `Ana Menü İçin 🏠 Tıkla`, false);
                msg.edit(cse);
              });

              css6.on("collect", r => {
                const cse = new Discord.MessageEmbed()
                  .setTitle(":slot_machine: Ekonomi - Kumar")
                  .setColor("RANDOM")
                  .addField(
                    `●▬▬▬▬▬▬▬▬【 Ekonomi - Kumar Komutlar 】▬▬▬▬▬▬▬▬▬●`,
                    `Komutlar`,
                    false
                  )
                  .addField(`> 🎓 Bilgi`, `Ana Menü İçin 🏠 Tıkla`, false);
                msg.edit(cse);
              });

              css7.on("collect", r => {
                const cse = new Discord.MessageEmbed()
                  .setTitle(":video_game: Oyunlar - Eğlence")
                  .setColor("RANDOM")
                  .addField(
                    `●▬▬▬▬▬▬▬▬【 Oyunlar - Eğlence Komutlar 】▬▬▬▬▬▬▬▬▬●`,
                    `Komutlar`,
                    false
                  )
                  .addField(`> 🎓 Bilgi`, `Ana Menü İçin 🏠 Tıkla`, false);

                msg.edit(cse);
              });

              css8.on("collect", r => {
                const cse = new Discord.MessageEmbed()
                  .setTitle(":level_slider: Level Sistem - Rank System")
                  .setColor("RANDOM")
                  .addField(
                    `●▬▬▬▬▬▬【 Level Sistem - Rank System Komutlar 】▬▬▬▬▬▬▬●`,
                    `**${prefix}rank** Seviye Bilgilerinizi RankCard Olarak Gösterir. \n **${prefix}seviye-aç** Seviye Sistemini Açarsınız. \n **${prefix}seviye-kapat** Seviye Sistemini Kapatırsnızı. \n **${prefix}seviye-log** Seviye Mesajinin Gidecegi Kanalı Ayarlar. \n **${prefix}leaderboard** Seviye Sıralaması Gösterir.`,
                    false
                  )
                  .addField(`> 🎓 Bilgi`, `Ana Menü İçin 🏠 Tıkla`, false);
                msg.edit(cse);
              });

              css9.on("collect", r => {
                const cse = new Discord.MessageEmbed()
                  .setTitle(":tada: Çekiliş - Events System")
                  .setColor("RANDOM")
                  .addField(
                    `●▬▬▬▬▬▬▬▬【 Çekiliş - Events System Komutlar 】▬▬▬▬▬▬▬▬▬●`,
                    `Komutlar`,
                    false
                  )
                  .addField(`> 🎓 Bilgi`, `Ana Menü İçin 🏠 Tıkla`, false);
                msg.edit(cse);
              });
              css10.on("collect", r => {
                const cse = new Discord.MessageEmbed()
                  .setTitle(":envelope: Davet - İnvite System")
                  .setColor("RANDOM")
                  .addField(
                    `●▬▬▬▬▬▬▬▬【 Davet - İnvite System Komutlar 】▬▬▬▬▬▬▬▬▬●`,
                    `Komutlar`,
                    false
                  )
                  .addField(`> 🎓 Bilgi`, `Ana Menü İçin 🏠 Tıkla`, false);
                msg.edit(cse);
              });
              css11.on("collect", r => {
                const cse = new Discord.MessageEmbed()
                  .setTitle(":cat: Evcil Hayvan - Cat System")
                  .setColor("RANDOM")
                  .addField(
                    `●▬▬▬▬▬▬【 Evcil Hayvan - Cat System Komutlar 】▬▬▬▬▬▬▬●`,
                    `Komutlar`,
                    false
                  )
                  .addField(`> 🎓 Bilgi`, `Ana Menü İçin 🏠 Tıkla`, false);
                msg.edit(cse);
              });
            });
          });
        });
      });
    });
  });
};

exports.conf = {
  aliases: []
};

exports.help = {
  name: "yardım"
};
 