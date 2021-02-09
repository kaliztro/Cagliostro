const Discord = require('discord.js');
const config = require("../../config.json");
const ms = require("ms");

        module.exports = {
            name: "mute",
            category: "adm",
            aliases: ["mutar"],
            description: "muta temporariamente um membro do servidor.",
            usage: `${config.prefix}mute tempo`,
            run: async (client, message, args, database, member) => {

                message.delete()

                if(!message.member.hasPermission("MUTE_MEMBERS"))return message.channel.send("Prece que vc não tem mana suficiente para isso.")

                database.ref(`Servidor/Mutado/${message.guild.id}`)
                 .once('value').then(async function (snap) {

                if (snap.val() == null) return;
          
                  let role = snap.val().CargoID
                              
                if(!role) return message.channel.send(`não encontrei o cargo Mutado. use ${config.prefix}dmute @cargo`)
                
                let user = message.mentions.members.first()
                if(!user) return message.channel.send("Vc precisa mencionar alguem. Tu sabe deisso né?")
                
                let time = args[1]
                if(!time) return message.channel.send("n sou vidente! diga o tempo.\n**s** para Segundo(s)\n**m** para Minuto(s)\n**h** para Hora(s)\n**d** Para dia(s)")
                
                let reason = args.slice(2).join(" ")
                if(!reason) reason = "Aparentemente foi sem motivo"
                
                if(user.hasPermission("MUTE_MEMBERS")) return message.channel.send("Esse usuario não pode ser silenciado.")
                  
                let logembed = new Discord.MessageEmbed()
                .setColor(config.cor)
                .setThumbnail(user.user.displayAvatarURL({ dynamic: true, format: "png", size: 1024 }))
                .setTitle(`Usuario Mutado | ${user.user.tag}`)
                .addField("Staff" , `${message.author}`)
                .addField("Motivo" , `${reason}`)
                .addField("Tempo" , `${time}`)
                .setTimestamp()
                
                if(ms(time)){
                
                user.roles.add(role)

                const m = await message.channel.send("O alvo foi silenciado.");
                m.edit(
                  logembed
                );
                          
                  setTimeout(function()  {
                  user.roles.remove(role)
                    message.channel.send(`${user} Foi desmutado`)
                  }, ms(time))
                }
            
                 })
    }
};