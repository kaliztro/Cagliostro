const Discord = require("discord.js")
const db = require("quick.db")

module.exports = {
  name: "rwebhook",
  category: "config",
  aliases: [],
  usage: "rwebhook <#canal>",
  description: "Remove o canal do webhook.",
  run: (client, message, args) => {
    if (!message.member.permissions.has("ADMINISTRATOR"))
    return message.reply("🛑 Parece que vc está tentando usar um comando que é permitido somente aos ADMs 🛑");
    
    db.set(`webhook_${message.guild.id}`) //set id in var
    
    message.channel.send(`O webhook foi removido`) //send success message
  }
}