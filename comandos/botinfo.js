const Discord = require('discord.js')
const moment = require('moment')
const config = require("../config.json");

moment.updateLocale('pt-br')

module.exports = {

  

  run: function (client, message, args) {

    let totalSeconds = client.uptime / 1000;
    let days = Math.floor(totalSeconds / 86400);
    let hours = Math.floor(totalSeconds / 3600);
    totalSeconds %= 3600;
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = totalSeconds % 60;
  
    let uptime = ` ${days.toFixed()}d ${hours.toFixed()}h ${minutes.toFixed()}m ${seconds.toFixed()}s`;
  
    const inline = true
    const botAvatar = client.user.displayAvatarURL()
    const date = client.user.createdAt
    const userName = client.user.username
    const servsize = client.guilds.cache.size
    const usersize = client.users.cache.size
    const status = {
      online: '`🟢` Online',
      offline: '`⚫` Offline'
    }

    const embed = new Discord.MessageEmbed()
      .setColor("#3086c9")
      .setThumbnail(botAvatar)
      .setAuthor('🤖 Minhas informações')
      .addField('**Meu nick**', userName)
      .addField('**Meu ID**', client.user.id)
      .addField('**Meu prefix é:**', `${config.prefix}`)
      .addField('**Meu criador**', 'Kaliztro#9240')
      .addField('**Servidores**', `🛡 ${servsize}`, true)
      .addField('**Usuários**', `👥${usersize}`, inline)
      .addField('**Estou online há**', `${uptime}`)
      .addField('**Criado em**', formatDate('DD/MM/YYYY, às HH:mm:ss', date))
      .addField('**Host**', 'DisCloudbot.com')
      .addField('**Link do Bot e servidor**', 'http://parceirosdaloucura.glitch.me/')
      .setFooter(`2020 © ${client.user.username}.`)
      .setTimestamp()

    if (client.user.presence.status) {
      embed.addField(
        '**Status**',
        `${status[client.user.presence.status]}`,
        inline,
        true
      )
    }

    message.channel.send(embed)
  },

  conf: {},

  get help () {
    return {
      name: 'botinfo',
      category: 'Info',
      description: 'Mostra informações do bot.',
      usage: 'botinfo'
    }
  }
}
/**
 * Formata a data passada para o padrão do Brasil.
 * @param {string} template
 * @param {Date=} [date]
 * @return {string}
 */
function formatDate (template, date) {
  var specs = 'YYYY:MM:DD:HH:mm:ss'.split(':')
  date = new Date(date || Date.now() - new Date().getTimezoneOffset() * 6e4)
  return date.toISOString().split(/[-:.TZ]/).reduce(function (template, item, i) {
    return template.split(specs[i]).join(item)
  }, template)
}