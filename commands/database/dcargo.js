const Discord = require("discord.js")
const firebase = require('firebase');
const database = firebase.database();

module.exports = {
  name: "dcargo",
  category: "config",
  aliases: [],
  usage: "dentrada <#canal>",
  description: "Define um canal de boas vindas",
  run: (client, message, args) => {

    if (!message.member.permissions.has("ADMINISTRATOR"))
    return message.reply("🛑 Parece que vc está tentando usar um comando que é permitido somente aos ADMs 🛑");


let role = message.mentions.roles.first()
    
if(!role) {
  return message.channel.send("porfavor mencione um cargo primeiro")
}

database.ref(`Servidor/Cargo/${message.guild.id}`)
.once('value').then(async function (snap) {
    if (snap.val() == null) {
        database.ref(`Servidor/Entrada/Cargo/${message.guild.id}`)
            .set({
                CargoID: `${role.id}`
            })

            message.channel.send(`o cargo definido foi: ${role}`)
            
              } else {
                database.ref(`Servidor/Entrada/Cargo/${message.guild.id}`)
                .update({
                    CargoID: `${role.id}`
                })
                message.channel.send(`o cargo foi redefinido para: ${role}`)
              }
            })
 }
}

    

