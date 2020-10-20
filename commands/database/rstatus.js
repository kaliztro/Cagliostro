const Discord = require("discord.js")
const db = require("quick.db")
const config = require("../../config.json")

module.exports = {
  name: "rstatus",
  category: "owner",
  aliases: [],
  usage: "rstatus",
  description: "Remove o status do bot.",
  run: (client, message, args) => {
    
    if(message.author.id != config.donoID) {
      return message.channel.send("Esse comando é especifico para o meu criador.")
    }
     
    db.delete(`status_`, )
    
    message.channel.send(`Status removido.`) 
  }
}