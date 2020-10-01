const Discord = require("discord.js")
const db = require("quick.db")

module.exports = {
  name: "dwebhook",
  category: "config",
  aliases: [],
  usage: "dwebhook <#canal>",
  description: "Define um canal para as mensagens do webhook",
  run: (client, message, args) => {
    
    let channel = message.mentions.channels.first() //mentioned channel
    
    if(!channel) { //if channel is not mentioned
      return message.channel.send("Primeiro você deve mencionar um canal")
    }
    
    //Now we gonna use quick.db
    
    db.set(`webhook_${message.guild.id}`, channel.id) //set id in var
    
    message.channel.send(`O webhook foi definido no canal: ${channel}`) //send success message
  }
}