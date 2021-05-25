const db = require("quick.db");
const Discord = require("discord.js");
const client = new Discord.Client();

const ayarlar = require('../ayarlar.json')

let gold = ayarlar.goldüye
exports.run = (client, message, args) => {
  if (message.author.id != process.env.sahip) {
    return message.channel.send("Bu komut sahibime özdür.");
  }

  let şahıs = message.mentions.users.first()

  if (!şahıs) return message.channel.send("Gold verilecek şahsı etiketle.");
  let enis = client.users.cache.get(şahıs.id)
client.channels.cache.get(gold).send(`${enis.tag} **Gold** oldu!`)
  message.channel.send(`\`${şahıs.tag}\` artık **Gold!**`);
db.push(`goldlar`, şahıs.tag)
  db.set(`gold_${şahıs.id}`, "acik");
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["goldyap"],
  permLevel: 4,
  kategori: "yapımcı"
};
exports.help = {
  name: "gold-yap"
};