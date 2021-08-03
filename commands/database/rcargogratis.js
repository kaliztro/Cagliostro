const Discord = require("discord.js")
const config = require("../../config.json")
const FB = require('firebase');
const p = require("../../index")

module.exports = {
    name: "rcargogratis",
    category: "config",
    aliases: [`rjg`],
    usage: `rcargo <@cargo>`,
    description: "Remove o cargo definido.",
    run: (client, message, args) => {
      
      if (!message.member.permissions.has("ADMINISTRATOR"))
      return message.reply("🛑 Parece que vc está tentando usar um comando que é permitido somente aos ADMs 🛑");

      var guildData = FB.database().ref(`Servidor/${message.guild.id}/FreeGame`);
      guildData.remove()

      message.channel.send(`O cargo definido foi removido`)
    }
  }