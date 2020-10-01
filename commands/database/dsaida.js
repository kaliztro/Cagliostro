const Discord = require("discord.js")
const db = require("quick.db")

module.exports = {
  name: "dsaida",
  category: "config",
  aliases: [],
  usage: "dsaida <#canal>",
  description: "define um canal de saida",
  run: (client, message, args) => {
    
    let channel = message.mentions.channels.first() //mentioned channel
    
    if(!channel) { //if channel is not mentioned
      return message.channel.send("Primeiro você deve mencionar um canal")
    }
    
    //Now we gonna use quick.db
    
    db.set(`saichannel_${message.guild.id}`, channel.id) //set id in var
    
    message.channel.send(`A mensagem de saida foi definida no canal: ${channel}`) //send success message
  }
}