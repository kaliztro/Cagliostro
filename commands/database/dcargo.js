const Discord = require("discord.js")
const config = require("../../config.json")
const p = require("../../index")

module.exports = {
  name: "dcargo",
  category: "config",
  aliases: [],
  usage: `dentrada <#canal>`,
  description: "Define um cargo a todos os novos membros",
  run: (client, message, args, database) => {

    if (!message.member.permissions.has("ADMINISTRATOR"))
    return message.reply("🛑 Parece que vc está tentando usar um comando que é permitido somente aos ADMs 🛑");


let role = message.mentions.roles.first()
    
if(!role) {
  return message.channel.send("porfavor mencione um cargo primeiro")
}

database.ref(`Servidor/${message.guild.id}/Entrada/Cargo`)
.once('value').then(async function (snap) {
    if (snap.val() == null) {
        database.ref(`Servidor/${message.guild.id}/Entrada/Cargo`)
            .set({
                CargoID: `${role.id}`
            })

            message.channel.send(`o cargo definido foi: ${role}`)
            
              } else {
                database.ref(`Servidor/${message.guild.id}/Entrada/Cargo`)
                .update({
                    CargoID: `${role.id}`
                })
                message.channel.send(`o cargo foi redefinido para: ${role}`)
              }
            })
 }
}

    

