
const Discord = require("discord.js")
const db = require("quick.db")

module.exports = {
  name: "rcargo",
  category: "config",
  aliases: [],
  usage: "rcargo <@cargo>",
  description: "Remove o cargo definido.",
  run: (client, message, args) => {
    
    db.delete(`role_${message.guild.id}`)
    
    message.channel.send(`O cargo definido foi removido`)
  }
}