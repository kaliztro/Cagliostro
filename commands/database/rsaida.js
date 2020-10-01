const Discord = require("discord.js")
const db = require("quick.db")

module.exports = {
  name: "rsaida",
  category: "config",
  aliases: [],
  usage: "rsaida <#canal>",
  description: "Remove o canal de boas vindas.",
  run: (client, message, args) => {
    if (!message.member.permissions.has("ADMINISTRATOR"))
    return message.reply("🛑 Parece que vc está tentando usar um comando que é permitido somente aos ADMs 🛑");
    
    db.delete(`saichannel_${message.guild.id}`) //set id in var
    
    message.channel.send(`A mensagem de boas vindas foi removida`) //send success message
  }
}