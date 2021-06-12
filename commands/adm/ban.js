const Discord = require('discord.js');
const config = require("../../config.json");
const p = require("../../index")

module.exports = {
    name: "ban",
    category: "adm",
    aliases: ["ban"],
    description: "Bane um membro do servidor.",
    usage: `ban @membro motivo`,
    run: async (client, message, args) => {

        var membro = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        if(!membro) return message.reply('Ops! o formato desse comando é \`<usuário>\` \`<motivo do banimento>\`.');
        if(membro === message.member) return message.reply('Você não pode se banir o-0');

        var motivo = args.slice(1).join(" ");
        if(!motivo) return message.reply('Ops! o formato desse comando é \`<usuário>\` \`<motivo do banimento>\`.');
        if(!message.member.hasPermission("BAN_MEMBERS")) return message.reply('🙄 Cara, só ADM pode banir alguém.');

        const ban = new Discord.MessageEmbed()
        .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL({format: "png"}))
        .setThumbnail("")
        .setColor(config.cor)
        .setDescription(`Você dejesa banir esse usuário: **${membro.user.username}**?`)
        .setImage(membro.user.displayAvatarURL())

        message.channel.send(ban).then(msg =>{
            msg.react('✅')

            let filtro = (reaction, usuario) => reaction.emoji.name === '✅' && usuario.id === message.author.id;
            let coletor = msg.createReactionCollector(filtro, {max: 1})

             ban.setDescription(`**Usuário foi banido com sucesso.**\nMembro: \`${membro.user.username}\` \nMotivo: **${motivo}**`)

            coletor.on("collect", cp =>{
                cp.remove(message.author.id);
                message.channel.send(ban)
                membro.ban();
            })
            
        });

        message.delete()

    }
}
