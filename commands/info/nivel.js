const Discord = require("discord.js")
const config = require("../../config.json")

module.exports = {
  name: "nivel",
  category: "info",
  aliases: ['level', 'lvl'],
  usage: `${config.prefix}nivel`,
  description: "Mostra seu nivel no servidor.",
  run: (client, message, args, database) => {

        database.ref(`Servidor/${message.guild.id}/Levels/${message.author.id}`)
            .once('value').then(function (snap) {
                const levell = snap.val().level
                const xpp = snap.val().xp
                let avatarr = message.author.avatarURL;
                let lEmbed = new Discord.MessageEmbed()
                    .setThumbnail(avatarr)
                    .setTitle("``Nível``")
                    .setDescription(`${message.author.tag}`)
                    .addField(`Nível atual:`, `${levell}`)
                    .addField(`XP`, `${xpp}/${nextLevel}`)
                    .setColor("#3086c9")
                    .setFooter('')
                    .setTimestamp()
                message.channel.send(lEmbed)

            })

  }
}