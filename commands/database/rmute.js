const Discord = require("discord.js")
const config = require("../../config.json")

module.exports = {
    name: "rmute",
    category: "config",
    aliases: [],
    usage: `${config.prefix}rmute <@cargo>`,
    description: "Remove o cargo definido.",
    run: (client, message, args, FB) => {
      
      if (!message.member.permissions.has("ADMINISTRATOR"))
      return message.reply("🛑 Parece que vc está tentando usar um comando que é permitido somente aos ADMs 🛑");

      var guildData = FB.database().ref(`Servidor/Mutado/${message.guild.id}`);
      guildData.remove()

      message.channel.send(`O cargo definido foi removido`)
    }
  }