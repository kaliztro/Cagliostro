const Discord = require('discord.js')
const config = require("../config.json")
const firebase = require('firebase');
const database = firebase.database();

module.exports = async (client, message) => {

    const emoj = client.guilds.cache.get("545386837846523905");
    const emoji = emoj.emojis.cache.find(emoji => emoji.name === "cagliostro");

    const menção = message.mentions.users.first()
    if(menção){
    if(menção.id === `${client.user.id}`) return message.channel.send(`${emoji}   Olá ${message.author.username}! Meu prefixo é:  **${config.prefix}**   Para mais informações utilize: **${config.prefix}ajuda**`)
    };

//sistema de XP
    if (message.author.bot) return;
    if (message.channel.type == "dm") return;   
    if (message.content.startsWith(config.prefix)) return;

    global.xp = '';
    global.nextLevel = '';
    global.canal = '';
    let addpontos = Math.floor(Math.random() * 7) + 8;

    database.ref(`Servidor/Levels/${message.guild.id}/${message.author.id}`)
        .once('value').then(async function (snap) {
            if (snap.val() == null) {
                database.ref(`Servidor/Levels/${message.guild.id}/${message.author.id}`)
                    .set({
                        xp: 0,
                        level: 1
                    })
            } else {
                xp = snap.val().xp + addpontos;
                nextLevel = snap.val().level * 1500;
                database.ref(`Servidor/Levels/${message.guild.id}/${message.author.id}`)
                    .update({
                        xp: xp
                    })
                if (nextLevel <= xp) {
                    nextLevel = snap.val().level + 1;
                    database.ref(`Servidor/Levels/${message.guild.id}/${message.author.id}`)
                        .update({
                            level: nextLevel
                        })
                    database.ref(`Servidor/Levels/${message.guild.id}/${message.author.id}`)
                        .once('value').then(function (snap) {
                            let servidor = message.guild.id;
                            let server = client.guilds.cache.get(message.guild.id)
                            const levell = snap.val().level
                            let avatarr = message.author.avatarURL;
                            let lEmbed =  new Discord.MessageEmbed()
                                .setThumbnail(avatarr)
                                .setTitle("Nível")
                                .setDescription(`${message.author.tag}`)
                                .addField(`Subiu de nível!`, `Nível: ${levell} \nServidor: ${message.guild.name}`)
                                .setColor("#3086c9")
                                .setFooter('')
                                .setTimestamp()

                            if (servidor) {
                                
                                message.channel.send(lEmbed)
                            
                            }
                        })
                        }
               /* if (message.content.toLowerCase() === 'level') {

                    message.delete().catch(O_o => { });
                    database.ref(`Servidor/Levels/${message.guild.id}/${message.author.id}`)
                        .once('value').then(function (snap) {
                            const levell = snap.val().level
                            const xpp = snap.val().xp
                            let avatarr = message.author.avatarURL;
                            let lEmbed = new Discord.MessageEmbed()
                                .setThumbnail(avatarr)
                                .setTitle("``Nível``")
                                .setDescription(`${message.author.tag}`)
                                .addField(`Nível atual:`, `${levell}`)
                                .addField(`XP`, `${xpp}/${nextLevel}`)
                                .setColor("#3086c9")
                                .setFooter('')
                                .setTimestamp()
                            message.channel.send(lEmbed)

                        })
                }*/
            }
        })
// fim do sistema de XP

};