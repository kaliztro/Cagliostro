const Discord = require("discord.js")
const db = require("quick.db")

module.exports = {
  name: "rstatus",
  category: "owner",
  aliases: [],
  usage: "rstatus",
  description: "Remove o status do bot.",
  run: (client, message, args) => {
    
    if(!message.author.id === "459559578648969227") {
      return message.channel.send("Esse comando é especifico para o meu criador.")
    }
     
    db.delete(`status_`, )
    
    message.channel.send(`Status removido.`) 
  }
}