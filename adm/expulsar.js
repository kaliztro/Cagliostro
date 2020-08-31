const Discord = require('discord.js');

exports.run = (client, message, args) =>{

        var membro = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        if(!membro) return message.reply('Ops! o formato desse comando é \`<usuário>\` \`<motivo da expulsão>\`.');
        if(membro === message.member) return message.reply('Você não pode se banir o-0');

        var motivo = args.slice(1).join(" ");
        if(!motivo) return message.reply('Ops! o formato desse comando é \`<usuário>\` \`<motivo da expulsão>\`.');
        if(!message.member.hasPermission("KICK_MEMBERS")) return message.reply('você é fraco, lhe falta permissão para usar esse comando');

        const kick = new Discord.MessageEmbed()
        .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL({format: "png"}))
        .setThumbnail("")
        .setColor("#3086c9")
        .setDescription(`Você dejesa expulsar esse usuário: **${membro.user.username}**?`)
        .setImage(membro.user.displayAvatarURL())

             kick.setDescription(`**Um membro do servidor foi expulso.**\nMembro: \`${membro.user.username}\` \nMotivo: **${motivo}**`)

                message.channel.send(kick)
                membro.kick(); 
        };

    

        exports.help ={
            name:'expulsar',
            category: 'Moderação',
            description: 'Expulsa um membro do servidor.',
            usage: 'expulsar @usuario motivo',
            admin: true
          }
        
