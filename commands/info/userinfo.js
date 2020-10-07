  
const Discord = require('discord.js');
const moment = require('moment');
const config = require("../../config.json");
moment.updateLocale('pt-br');


module.exports = {
    name: "userinfo",
    category: "info",
    aliases: ["ui"],
    description: "Mostra as informações do usuario",
    usage: "é só isso.",

    run: async (client, message, args) => {
    let userArray = message.content.split(" ");
    let userArgs = userArray.slice(1);
    let member = message.mentions.members.first() || message.guild.members.cache.get(userArgs[0]) || message.guild.members.cache.find(x => x.user.username.toLowerCase() === userArgs.slice(0).join(" ") || x.user.username === userArgs[0]) || message.member;
    
    if (member.presence.status === 'dnd') member.presence.status = '`🔴`Não perturbar';
    if (member.presence.status === 'online') member.presence.status = '`🟢`Online';
    if (member.presence.status === 'idle') member.presence.status = '`🟡`Ausente';
    if (member.presence.status === 'offline') member.presence.status = '`⚫`offline';

    let status = member.presence.status;

    const date = client.user.createdAt
    const joined = message.member.joinedAt


    const userEmbed = new Discord.MessageEmbed()
    .setAuthor(member.user.tag, member.user.displayAvatarURL())
    .setTimestamp()
    .setColor(config.cor)
    .setImage(member.user.displayAvatarURL())
    .addField("ID do Membro", member.id)
    .addField('Cargo(s)', `<@&${member._roles.join('> <@&')}>`)
    .addField("Conta criada em:", formatDate('DD/MM/YYYY, às HH:mm:ss', date)) 
    .addField('Juntou-se ao servidor em:', formatDate('DD/MM/YYYY, às HH:mm:ss', joined))
    .addField("Status", status)

    message.channel.send(userEmbed);

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