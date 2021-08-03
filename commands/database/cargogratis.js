const Discord = require("discord.js")
const config = require("../../config.json")
const p = require("../../index")

module.exports = {
  name: "cargogratis",
  category: "config",
  aliases: [`jg`],
  usage: `cargogratis <#cargo>`,
  description: "Define um cargo para a reacão de jogo gratis.",
  run: (client, message, args, database) => {

    if (!message.member.permissions.has("ADMINISTRATOR"))
    return message.reply("🛑 Parece que vc está tentando usar um comando que é permitido somente aos ADMs 🛑");


let role = message.mentions.roles.first()
    
if(!role) {
  return message.channel.send("porfavor mencione um cargo primeiro")
}

database.ref(`Servidor/${message.guild.id}/FreeGame`)
.once('value').then(async function (snap) {
    if (snap.val() == null) {
        database.ref(`Servidor/${message.guild.id}/FreeGame`)
            .set({
                cargo: `${role.id}`
            })

            message.channel.send(`o cargo definido foi: ${role}`)
            
              } else {
                database.ref(`Servidor/${message.guild.id}/FreeGame`)
                .update({
                    cargo: `${role.id}`
                })
                message.channel.send(`o cargo foi redefinido para: ${role}`)
              }
            })
 }
}

    

