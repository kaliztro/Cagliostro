const Discord = require("discord.js")

module.exports = {
  name: "nivel",
  category: "info",
  aliases: ['level'],
  usage: "!level ou !nivel",
  description: "Mostra seu nivel no servidor.",
  run: (client, message, args, database) => {

        database.ref(`Servidor/Levels/${message.guild.id}/${message.author.id}`)
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