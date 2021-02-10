const Discord = require("discord.js")
const config = require("../../config.json")

module.exports = {
    name: "dmute",
    category: "config",
    aliases: [],
    usage: `${config.prefix}dmute <@cargo>`,
    description: "Define o cargo de mutado",
    run: (client, message, args, database) => {

        if (!message.member.permissions.has("ADMINISTRATOR"))
    return message.reply("🛑 Parece que vc está tentando usar um comando que é permitido somente aos ADMs 🛑");

 let role = message.mentions.roles.first()

database.ref(`Servidor/${message.guild.id}/Mutado`)
.once('value').then(async function (snap) {
    if (snap.val() == null) {
        database.ref(`Servidor/${message.guild.id}/Mutado`)
            .set({
                CargoID: `${role.id}`
            })

            message.channel.send(`o cargo definido foi: ${role}`)
            
              } else {
                database.ref(`Servidor/${message.guild.id}/Mutado`)
                .update({
                    CargoID: `${role.id}`
                })
                message.channel.send(`o cargo foi redefinido para: ${role}`)
              }
            })
        }
    }