const Discord = require('discord.js');
const config = require("../../config.json");
const p = require("../../index")

module.exports = {
        name: "expulsar",
        category: "adm",
        aliases: ["expulsar"],
        description: "Expulsa um membro do servidor.",
        usage: `expulsar @membro motivo`,
        run: async (client, message, args) => {

        var membro = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        if(!membro) return message.reply('Ops! o formato desse comando é \`<usuário>\` \`<motivo da expulsão>\`.');
        if(membro === message.member) return message.reply('Você não pode se banir o-0');

        var motivo = args.slice(1).join(" ");
        if(!motivo) return message.reply('Ops! o formato desse comando é \`<usuário>\` \`<motivo da expulsão>\`.');
        if(!message.member.hasPermission("KICK_MEMBERS")) return message.reply('você é fraco, vc não consegue expulsar ninguém. chame algum adulto para ajuda-lo.');

        const kick = new Discord.MessageEmbed()
        .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL({format: "png"}))
        .setThumbnail("")
        .setColor(config.cor)
        .setDescription(`Você dejesa expulsar esse usuário: **${membro.user.username}**?`)
        .setImage(membro.user.displayAvatarURL())

             kick.setDescription(`**Um membro do servidor foi expulso.**\nMembro: \`${membro.user.username}\` \nMotivo: **${motivo}**`)

                message.channel.send(kick)
                membro.kick(); 

                message.delete()

        }
}

    
