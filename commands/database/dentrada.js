const Discord = require("discord.js")

module.exports = {
  name: "dentrada",
  category: "config",
  aliases: [],
  usage: "dentrada <#canal>",
  description: "Define um canal de boas vindas",
  run: (client, message, args, database) => {

    if (!message.member.permissions.has("ADMINISTRATOR"))
    return message.reply("🛑 Parece que vc está tentando usar um comando que é permitido somente aos ADMs 🛑");

    let opa = message.mentions.channels.first() 
    let guild = message.guild.id

    if(!opa) { 
      return message.channel.send("Primeiro você deve mencionar um canal")
    }

    database.ref(`Servidor/Entrada/${message.guild.id}`)
    .once('value').then(async function (snap) {
        if (snap.val() == null) {
            database.ref(`Servidor/Entrada/${message.guild.id}`)
                .set({
                    server: `${message.guild.id}`,
                    canal: `${opa.id}`
                })

                message.channel.send(`A mensagem de boas vindas foi definida no canal: ${opa}`) 

        } else {

                database.ref(`Servidor/Entrada/${message.guild.id}`)
                .update({
                  server: `${message.guild.id}`,
                  canal: `${opa.id}`
                })

                message.channel.send(`A mensagem de boas vindas foi redefinida para o canal: ${opa}`)

              }
            })

            
 }
}

    

