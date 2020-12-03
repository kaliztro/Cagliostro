const Discord = require("discord.js")

module.exports = {
  name: "rsaida",
  category: "config",
  aliases: [],
  usage: "rsaida <#canal>",
  description: "Remove o canal de saida.",
  run: (client, message, args, FB) => {

    if (!message.member.permissions.has("ADMINISTRATOR"))
    return message.reply("🛑 Parece que vc está tentando usar um comando que é permitido somente aos ADMs 🛑");

var guildData = FB.database().ref(`Servidor/Saida/${message.guild.id}`);
guildData.remove()

message.channel.send(`A mensagem de Saida foi removida`)
    
 }
}




