const Discord = require("discord.js")
const db = require("quick.db")

module.exports = {
  name: "rstatus",
  category: "owner",
  aliases: [],
  usage: "rstatus",
  description: "Remove o status do bot.",
  run: (client, message, args) => {
    
    if (message.member.user.id == '459559578648969227' ) {
    }else{ return message.reply(`Somente o meu criador pode usar esse comando`) }
     
    db.delete(`status_`, )
    
    message.channel.send(`Status removido.`) 
  }
}