const Discord = require("discord.js")
const config = require("../../config.json")
const p = require("../../index")

module.exports = {
  name: "nivel",
  category: "info",
  aliases: ['level', 'lvl'],
  usage: `nivel`,
  description: "Mostra seu nivel no servidor.",
  run: (client, message, args, database) => {

    let user = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author;

        database.ref(`Servidor/${message.guild.id}/Levels/${user.id}`)
            .once('value').then(function (snap) {
                const levell = snap.val().level
                const xpp = snap.val().xp
                const nextLevel = snap.val().nextLevel
                let avatarr = user.avatarURL({ dynamic: true, format: 'png', size: 1024 });
                let lEmbed = new Discord.MessageEmbed()
                    .setThumbnail(avatarr)
                    .setTitle("``Nível``")
                    .setDescription(`${user.tag}`)
                    .addField(`Nível atual:`, `${levell}`)
                    .addField(`XP`, `${xpp}/${nextLevel}`)
                    .setColor("#3086c9")
                    .setFooter('')
                    .setTimestamp()
                message.channel.send(lEmbed)

            })

  }
}