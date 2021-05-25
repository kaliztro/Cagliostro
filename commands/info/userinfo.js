  
const Discord = require('discord.js');
const moment = require('moment');
const config = require("../../config.json");
moment.locale('pt-BR');

const p = require("../../index")
module.exports = {
    name: "userinfo",
    category: "info",
    aliases: ["ui", "user"],
    description: "Mostra as informações do usuario",
    usage: `${p.prefix}userinfo`,

    run: async (client, message, args) => {
    let userArray = message.content.split(" ");
    let userArgs = userArray.slice(1);
    let member = message.mentions.members.first() || message.guild.members.cache.get(userArgs[0]) || message.guild.members.cache.find(x => x.user.username.toLowerCase() === userArgs.slice(0).join(" ") || x.user.username === userArgs[0]) || message.member;
    
    if (member.presence.status === 'dnd') member.presence.status = '`🔴`Não perturbar';
    if (member.presence.status === 'online') member.presence.status = '`🟢`Online';
    if (member.presence.status === 'idle') member.presence.status = '`🟡`Ausente';
    if (member.presence.status === 'offline') member.presence.status = '`⚫`offline';

    let x = Date.now() - member.createdAt;
    let y = Date.now() - message.guild.members.cache.get(member.id).joinedAt;

    let status = member.presence.status;

    const userEmbed = new Discord.MessageEmbed()
    .setAuthor(member.user.username, member.user.displayAvatarURL() )
    .setColor(config.cor)
    .setImage(member.user.displayAvatarURL())
    .addField("Tag", `#${member.user.discriminator}`)
    .addField("ID", member.id)
    .addField('Cargo(s)', `<@&${member._roles.join('> <@&')}>`)
    .addField("Conta criada em:", ` ${moment(member.user.createdTimestamp).format('LL')} ${moment(member.user.createdTimestamp).fromNow()}`) 
    .addField('Juntou-se ao servidor em:', `${moment(member.joinedAt).format('LL LTS')}`)
    .addField("Status", status)

    message.channel.send(userEmbed);

    }
}
