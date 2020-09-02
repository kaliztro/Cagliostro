const Discord = require('discord.js')

const moment = require('moment')
moment.locale('pt-br')

module.exports = {

  run: function (client, message, args) {
    const date = message.guild.createdAt
    const joined = message.member.joinedAt
    const members = message.guild.members.cache;

    const region = {
      brazil: ':flag_br: Brazil'
    }
    
    const embed = new Discord.MessageEmbed()
      .setColor("#3086c9")
      .setThumbnail(message.guild.iconURL())
      .setAuthor('🔍 Informações do servidor')
      .addField('**Nome**', message.guild.name, true)
      .addField('**ID**', message.guild.id, true)
      .addField('**Dono(a)**', `${message.guild.owner.user.username}#${message.guild.owner.user.discriminator}`)
      .addField('**Região**', region[message.guild.region], true)
      .addField('**Canais**', message.guild.channels.cache.size, true)
      .addField('**Cargos**', message.guild.roles.cache.size, true)
      .addField('**Humanos | Bots**', `${message.guild.members.cache.filter(member => !member.user.bot).size} | ${message.guild.members.cache.filter(member => member.user.bot).size}`)
      .addField('**Nivel de Boost**', message.guild.premiumTier , 'Nivel', message.guild.premiumTier)
      .addField('**Criado em**', formatDate('DD/MM/YYYY, às HH:mm:ss', date))
      .addField('**Você entrou em**', formatDate('DD/MM/YYYY, às HH:mm:ss', joined))
      .setTimestamp()
    message.channel.send(embed)
  },
 
  conf: {},

  get help () {
    return {
      name: 'serverinfo',
      category: 'Info',
      description: 'Informação sobre o servidor',
      usage: 'serverinfo'
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