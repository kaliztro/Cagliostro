const Discord = require("discord.js")
const config = require("../../config.json")

module.exports = {
  name: "dsugestao",
  category: "config",
  aliases: [],
  usage: `${config.prefix}dsugestao <#canal>`,
  description: "Define um canal de sugestões",
  run: (client, message, args, database) => {

    if (!message.member.permissions.has("ADMINISTRATOR"))
    return message.reply("🛑 Parece que vc está tentando usar um comando que é permitido somente aos ADMs 🛑");

    let opa = message.mentions.channels.first() 
    let guild = message.guild.id

    if(!opa) { 
      return message.channel.send("Primeiro você deve mencionar um canal")
    }

    database.ref(`Servidor/Canal de Sugestao/${message.guild.id}`)
    .once('value').then(async function (snap) {
        if (snap.val() == null) {
            database.ref(`Servidor/Canal de Sugestao/${message.guild.id}`)
                .set({
                    server: `${message.guild.id}`,
                    canal: `${opa.id}`
                })

                message.channel.send(`O canal definido para sugestões foi: ${opa}`) 

        } else {

                database.ref(`Servidor/Canal de Sugestao/${message.guild.id}`)
                .update({
                  server: `${message.guild.id}`,
                  canal: `${opa.id}`
                })

                message.channel.send(`O canal de sugestões foi redefinido para: ${opa}`)

              }
            })

            
 }
}

    

