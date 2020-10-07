  
const Discord = require('discord.js')
const config = require("../../config.json");

const moment = require('moment')
moment.updateLocale('pt-br');

module.exports = {
    name: "serverinfo",
    category: "info",
    aliases: ["si"],
    description: "Informação sobre o servidor.",
    usage: "só digitar o comando.",
    run: async (client, message, args) => {

      const verificationLevels = {
        NONE: 'Nenhuma',
        LOW: 'Baixa',
        MEDIUM: 'Media',
        HIGH: 'Alta',
        VERY_HIGH: 'Muito alta'
      };

        const date = message.guild.createdAt
        const joined = message.member.joinedAt
        const members = message.guild.members.cache;
    
        const region = {
          brazil: ':flag_br: Brazil'
        }
        
        const embed = new Discord.MessageEmbed()
        .setColor(config.cor)
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
        .addField(`**Nivel de verificação**`, `${verificationLevels[message.guild.verificationLevel]}`)
        .addField('**Criado em**', formatDate('DD/MM/YYYY, às HH:mm:ss', date))
        .setTimestamp()
      message.channel.send(embed)

    }
};

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