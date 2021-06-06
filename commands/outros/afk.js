const Discord = require("discord.js")
const config = require("../../config.json")
const p = require("../../index")
const FB = require('firebase');

module.exports = {
  name: "afk",
  category: "outros",
  aliases: ["ausente"],
  usage: `${p.prefix}afk <mensagem> / ${p.prefix}ausente <mensagem>`,
  description: "Define uma mensagem afk",
  run: (client, message, args, database) => {

  message.delete()
    
 if (message.content.includes("on")) {
 
  const Mensagem = `Ele está afk`

  database.ref(`afk/${message.author.id}`)
  .once('value').then(async function (snap) {
      if (snap.val() == null) {
          database.ref(`afk/${message.author.id}`)
              .set({
                  MensagemAFK: `${Mensagem}`
              })
  
              message.channel.send(`Mensagem de AFK ativa.`).then(msg => msg.delete({timeout: 5000}))
              
                } else {
                  database.ref(`afk/${message.author.id}`)
                  .update({
                      MensagemAFK: `${Mensagem}`
                  })
                  message.channel.send(`Mensagem de AFK ativa.`).then(msg => msg.delete({timeout: 5000}))
                }
              })

} else if (message.content.includes("off")) {

  var AFKData = FB.database().ref(`afk/${message.author.id}`);
  AFKData.remove()
  
  message.channel.send(`Mensagem de AFK desligada.`).then(msg => msg.delete({timeout: 5000}))

} else {
   return message.channel.send("a forma correta é afk on / afk off").then(msg => msg.delete({timeout: 5000}));
 }

 }
}