const Discord = require("discord.js")

module.exports = {
    name: "rcargo",
    category: "config",
    aliases: [],
    usage: "rcargo <@cargo>",
    description: "Remove o cargo definido.",
    run: (client, message, args, FB) => {
      
      if (!message.member.permissions.has("ADMINISTRATOR"))
      return message.reply("🛑 Parece que vc está tentando usar um comando que é permitido somente aos ADMs 🛑");

      var guildData = FB.database().ref(`Servidor/Cargo/${message.guild.id}`);
      guildData.remove()

      message.channel.send(`O cargo definido foi removido`)
    }
  }