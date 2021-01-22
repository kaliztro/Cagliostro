const discord = require("discord.js")
const config = require("../../config.json")
const path = require('path')

module.exports = {
  name: "conectar",
  description: "bot se conecta no canal de voz (n faz nada ainda).",
  usage: `${config.prefix}join`,
  category: "dono",
  aliases: ["join", "tocar", "audio"],
  run: async (client, message, args, database) => {

    if (!message.member.permissions.has("ADMINISTRATOR"))
    return message.reply(
      "NÃO QUERO."
    );

    let { voice } = message.member

    voice.channel.join().then((connection) => {
        connection.play(path.join(__dirname, `${args[0]}.mp3`))
    })

    message.delete()

  }
}

