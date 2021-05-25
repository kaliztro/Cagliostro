const Discord = require("discord.js")
const config = require("../../config.json")
const p = require("../../index")

module.exports = {
  name: "dsaida",
  category: "config",
  aliases: [],
  usage: `${p.prefix}dsaida <#canal>`,
  description: "define um canal de saida",
  run: (client, message, args, database) => {

    if (!message.member.permissions.has("ADMINISTRATOR"))
    return message.reply("🛑 Parece que vc está tentando usar um comando que é permitido somente aos ADMs 🛑");

    let opa = message.mentions.channels.first() 
    let guild = message.guild.id

    if(!opa) { 
      return message.channel.send("Primeiro você deve mencionar um canal")
    }

    database.ref(`Servidor/${message.guild.id}/Saida`)
    .once('value').then(async function (snap) {
        if (snap.val() == null) {
            database.ref(`Servidor/${message.guild.id}/Saida`)
                .set({
                    server: `${message.guild.id}`,
                    canal: `${opa.id}`,
                    nome: `${message.guild.name}`
                })

                message.channel.send(`A mensagem de saida foi definida no canal: ${opa}`)

              } else {

                database.ref(`Servidor/${message.guild.id}/Saida`)
                .update({
                  server: `${message.guild.id}`,
                  canal: `${opa.id}`,
                  nome: `${message.guild.name}`
                })

                message.channel.send(`A mensagem de saida foi redefinida para o canal: ${opa}`)   

              }
            })      
 }
}

    

