// envia uma mensagem para o dono do bot quando o bot entra em um novo servidor
const Discord = require('discord.js')
const { donoID, cor } = require("../config.json")

module.exports = (client, guild, message) => {

    const user = client.users.cache.get(donoID)
    const date = guild.createdAt

    const Entrada = new Discord.MessageEmbed()
    .setTitle('**Entrei em um servidor**')
    .addField('**Nome**', guild.name)
    .addField('**ID**', guild.id)
    .addField('**Dono(a)**', `${guild.owner.user.username}#${guild.owner.user.discriminator}`)
    .addField('**Canais**', guild.channels.cache.size, true)
    .addField('**Cargos**', guild.roles.cache.size, true)
    .addField('**Humanos | Bots**', `${guild.members.cache.filter(member => !member.user.bot).size} | ${guild.members.cache.filter(member => member.user.bot).size}`)
    .addField('**Nivel de Boost**', guild.premiumTier , 'Nivel', guild.premiumTier)
    .addField('**Criado em**', formatDate('DD/MM/YYYY, às HH:mm:ss', date))
    .setColor(cor)
    .setTimestamp()
  
    user.send(Entrada);
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