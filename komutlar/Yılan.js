const Discord = require("discord.js");
const GameCord = require("gamecord-fork").djs;
const db = require("quick.db");

let oyun = {
  Score: "Skor",
  "Game Over": "Oyun Bitti.."
};

exports.run = async (client, message, args) => {
  new GameCord.SnakeGame(message)

    .setTitle("Yılan Oyunu")
    .setColor("#2F3136")
    .setTime(60000)
    .run();
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["snake", "yılan", "yılan-oyunu", "play-snake", "yılan-oyna"],
  permLevel: 0
};

exports.help = {
  name: "snake",
  description: "Bot i",
  usage: "istatistik"
};
