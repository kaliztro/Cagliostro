const Discord = require("discord.js")
const config = require("../../config.json")

module.exports = {
   name: "prefix",
   category: "adm",
   aliases: ["prefixo"],
   description: "Altera o prefixo do bot.",
   usage: `Digite *${config.prefix}prefix e novo prefix`,
   run: async (client, message, args, database) => { 

    if(!args[0]) return message.channel.send("Você deve fornecer o novo prefixo ou digitar remove para usar o prefixo padrão.")

    if (message.content.includes("remove")) {
        database.ref(`Servidor/${message.guild.id}/Prefix`)
        .set({
            Prefix: `!`,
            nome: `${message.guild.name}`
        })
        message.channel.send("O prefixo foi resetado com sucesso.")

    } else 

database.ref(`Servidor/${message.guild.id}/Prefix`)
    .once('value').then(async function (snap) {
    if (snap.val() == null) {
            database.ref(`Servidor/${message.guild.id}/Prefix`)
                .set({
                    Prefix: `!`,
                    nome: `${message.guild.name}`
            })

          } else {
            database.ref(`Servidor/${message.guild.id}/Prefix`)
            .set({
                Prefix: `${args[0]}`,
                nome: `${message.guild.name}`
            })
            message.channel.send(`Prefixo alterado com sucesso Para. ${args[0]}`)
          }

        })

     

    }
}

