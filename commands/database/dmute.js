const Discord = require("discord.js")
const config = require("../../config.json")

module.exports = {
    name: "dmute",
    category: "config",
    aliases: [],
    usage: `${config.prefix}dmute <@cargo>`,
    description: "Define o cargo de mutado",
    run: (client, message, args, database) => {

 let role = message.mentions.roles.first()

database.ref(`Servidor/Mutado/${message.guild.id}`)
.once('value').then(async function (snap) {
    if (snap.val() == null) {
        database.ref(`Servidor/Mutado/${message.guild.id}`)
            .set({
                CargoID: `${role.id}`
            })

            message.channel.send(`o cargo definido foi: ${role}`)
            
              } else {
                database.ref(`Servidor/Mutado/${message.guild.id}`)
                .update({
                    CargoID: `${role.id}`
                })
                message.channel.send(`o cargo foi redefinido para: ${role}`)
              }
            })
        }
    }