const Discord = require("discord.js")
const firebase = require('firebase');
const database = firebase.database();

module.exports = {
  name: "dsaida",
  category: "config",
  aliases: [],
  usage: "dsaida <#canal>",
  description: "define um canal de saida",
  run: (client, message, args) => {

    if (!message.member.permissions.has("ADMINISTRATOR"))
    return message.reply("🛑 Parece que vc está tentando usar um comando que é permitido somente aos ADMs 🛑");

    let opa = message.mentions.channels.first() 
    let guild = message.guild.id

    if(!opa) { 
      return message.channel.send("Primeiro você deve mencionar um canal")
    }

    database.ref(`Servidor/Saida/${message.guild.id}`)
    .once('value').then(async function (snap) {
        if (snap.val() == null) {
            database.ref(`Servidor/Saida/${message.guild.id}`)
                .set({
                    server: `${message.guild.id}`,
                    canal: `${opa.id}`
                })

                message.channel.send(`A mensagem de saida foi definida no canal: ${opa}`)

              } else {

                database.ref(`Servidor/Saida/${message.guild.id}`)
                .update({
                  server: `${message.guild.id}`,
                  canal: `${opa.id}`
                })

                message.channel.send(`A mensagem de saida foi redefinida para o canal: ${opa}`)   

              }
            })      
 }
}

    

