
const Discord = require("discord.js")
const db = require("quick.db")

module.exports = {
  name: "dcargo",
  category: "config",
  aliases: ["sr"],
  usage: "dcargo <@cargo>",
  description: "Define um cargo para quando um novo usuario entra no servidor.",
  run: (client, message, args) => {
    
    let role = message.mentions.roles.first()
    
    if(!role) {
      return message.channel.send("porfavor mencione um cargo primeiro")
    }
    
    //Now we gonna use quick.db
    
    db.set(`role_${message.guild.id}`, role.id)
    
    message.channel.send(`o cargo definido foi: ${role}`)
  }
}