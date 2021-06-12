const Discord = require("discord.js")
const config = require("../../config.json")
const FB = require('firebase');
const p = require("../../index")

module.exports = {
  name: "rsugestao",
  category: "config",
  aliases: [],
  usage: `rsugestao <#canal>`,
  description: "Remove o canal de sugestões.",
  run: (client, message, args, firebase) => {

    if (!message.member.permissions.has("ADMINISTRATOR"))
    return message.reply("🛑 Parece que vc está tentando usar um comando que é permitido somente aos ADMs 🛑");

var guildData = FB.database().ref(`Servidor/${message.guild.id}/Canal de Sugestao`);
guildData.remove()

message.channel.send(`O canal de sugestão foi removido com sucesso!`)
    
 }
}




