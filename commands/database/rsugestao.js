const Discord = require("discord.js")
const config = require("../../config.json")

module.exports = {
  name: "rsugestao",
  category: "config",
  aliases: [],
  usage: `${config.prefix}rsugestao <#canal>`,
  description: "Remove o canal de sugestões.",
  run: (client, message, args, FB) => {

    if (!message.member.permissions.has("ADMINISTRATOR"))
    return message.reply("🛑 Parece que vc está tentando usar um comando que é permitido somente aos ADMs 🛑");

var guildData = FB.database().ref(`Servidor/Canal de Sugestao/${message.guild.id}`);
guildData.remove()

message.channel.send(`O canal de sugestão foi removido com sucesso!`)
    
 }
}




