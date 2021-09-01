const Discord = require('discord.js')
const moment = require('moment')
const config = require("../../config.json");
const discloud = require("discloud-status");
const p = require("../../index")

moment.updateLocale('pt-br')

module.exports = {
    name: "botinfo",
    category: "info",
    aliases: ["bi"],
    description: "Mostra informações do bot.",
    usage: `botinfo`,
    run: async (client, message, args) => {

        let totalSeconds = client.uptime / 1000;
    let days = Math.floor(totalSeconds / 86400);
    let hours = Math.floor(totalSeconds / 3600);
    totalSeconds %= 3600;
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = totalSeconds % 60;
  
    let uptime = ` ${days.toFixed()}d ${hours.toFixed()}h ${minutes.toFixed()}m ${seconds.toFixed()}s`;
  
    const guild = client.guilds.cache.get("720758990820343909");
    const emoji = guild.emojis.cache.find(emoji => emoji.id === "738911846635012188");

    const DRAM = discloud.ram();

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
      .setColor(config.cor)
      .setThumbnail(botAvatar)
      .setAuthor('🤖 Minhas informações')
      .addField('**Meu nick**', userName)
      .addField('**Meu ID**', client.user.id)
      .addField('**Meu prefix é:**', `ㅤㅤ${p.prefix}`)
      .addField('**Meu criador**', 'Kaliztro#4988')
      .addField('**Servidores**', `ㅤ🛡 ${servsize}`, true)
      .addField('**Usuários**', `ㅤ👥${usersize}`, inline)
      .addField('**Estou online há**', `${uptime}`)
      .addField('**Criado em**', formatDate('DD/MM/YYYY', date))
      .addField('**Host**', `${emoji} DisCloudbot.com`)
      .addField('**Uso de RAM**', `${DRAM}` )
      .addField("Me adicione ao seu servidor", "ㅤㅤㅤㅤ[link](https://discord.com/api/oauth2/authorize?client_id=711082925617184799&permissions=8&scope=bot%20applications.commands)in park")
      .setFooter(`2021 © ${client.user.username}.`)
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