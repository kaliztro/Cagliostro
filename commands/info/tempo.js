const Discord = require("discord.js");
const config = require("../../config.json");

module.exports = {
    name: "tempo",
    category: "info",
    aliases: ["temp"],
    description: "Mostra o tempo que o bot esta ON.",
    usage: "não precisa de mais nada.",
    run: async (client, message, args) => {
  message.delete().catch(O_o => {});
  let totalSeconds = client.uptime / 1000;
  let days = Math.floor(totalSeconds / 86400);
  let hours = Math.floor(totalSeconds / 3600);
  totalSeconds %= 3600;
  let minutes = Math.floor(totalSeconds / 60);
  let seconds = totalSeconds % 60;

  let uptime = `🗓️ ${days.toFixed()} dias\n🗓️ ${hours.toFixed()} horas\n🗓️ ${minutes.toFixed()} minutos\n🗓️ ${seconds.toFixed()} segundos`;

  const embed = new Discord.MessageEmbed()
    .setTitle(`Tempo de atividade 🕰️`)
    .setThumbnail("https://imgur.com/WZMylbw.gif")
    .setColor("#ff0202")
    .setDescription(`**Estou online há:**\n${uptime}`)

  message.channel.send(embed);
    }
};