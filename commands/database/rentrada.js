const Discord = require("discord.js")
const config = require("../../config.json")
const p = require("../../index")
const FB = require('firebase');

module.exports = {
  name: "rentrada",
  category: "config",
  aliases: [],
  usage: `dentrada <#canal>`,
  description: "Remove o canal de boas vindas",
  run: (client, message, args) => {

    if (!message.member.permissions.has("ADMINISTRATOR"))
    return message.reply("🛑 Parece que vc está tentando usar um comando que é permitido somente aos ADMs 🛑");

var guildData = FB.database().ref(`Servidor/${message.guild.id}/Entrada`);
guildData.remove()

message.channel.send(`A mensagem de boas vindas foi removida`)    

 }
}




