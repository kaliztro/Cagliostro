const Discord = require("discord.js")
const db = require("quick.db")

module.exports = {
  name: "rentrada",
  category: "config",
  aliases: [],
  usage: "rentrada <#canal>",
  description: "Remove o canal de boas vindas",
  run: (client, message, args) => {
    
    db.delete(`welchannel_${message.guild.id}`) //set id in var
    
    message.channel.send(`A mensagem de boas vindas foi removida.`) //send success message
  }
}