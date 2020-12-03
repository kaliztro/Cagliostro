const Discord = require("discord.js")

module.exports = {
  name: "rentrada",
  category: "config",
  aliases: [],
  usage: "rentrada <#canal>",
  description: "Remove o canal de boas vindas",
  run: (client, message, args, FB) => {

    if (!message.member.permissions.has("ADMINISTRATOR"))
    return message.reply("🛑 Parece que vc está tentando usar um comando que é permitido somente aos ADMs 🛑");

var guildData = FB.database().ref(`Servidor/Entrada/${message.guild.id}`);
guildData.remove()

message.channel.send(`A mensagem de boas vindas foi removida`)    

 }
}




