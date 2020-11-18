const Discord = require("discord.js")
const firebase = require('firebase');
const database = firebase.database();

module.exports = {
  name: "rentrada",
  category: "config",
  aliases: [],
  usage: "rentrada <#canal>",
  description: "Remove o canal de boas vindas",
  run: (client, message, args) => {

    if (!message.member.permissions.has("ADMINISTRATOR"))
    return message.reply("🛑 Parece que vc está tentando usar um comando que é permitido somente aos ADMs 🛑");

var guildData = firebase.database().ref(`Servidor/Entrada/${message.guild.id}`);
guildData.remove()

message.channel.send(`A mensagem de boas vindas foi removida`)    

 }
}




