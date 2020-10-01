const Discord = require("discord.js")
const db = require("quick.db")

module.exports = {
  name: "dentrada",
  category: "config",
  aliases: [],
  usage: "dentrada <#canal>",
  description: "Define um canal de boas vindas",
  run: (client, message, args) => {
    if (!message.member.permissions.has("ADMINISTRATOR"))
    return message.reply("🛑 Parece que vc está tentando usar um comando que é permitido somente aos ADMs 🛑");

    let channel = message.mentions.channels.first() //mentioned channel
    let guild = message.guild.id
    
    if(!channel) { //if channel is not mentioned
      return message.channel.send("Primeiro você deve mencionar um canal")
    }
    
    //Now we gonna use quick.db
    
    db.set(`welchannel_${message.guild.id}`, channel.id) //set id in var
    db.set(`servidor_${message.guild.id}`, guild)
    
    message.channel.send(`A mensagem de boas vindas foi definida no canal: ${channel}`) //send success message
  }
}