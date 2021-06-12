const Discord = require('discord.js')
const config = require("../config.json")
const firebase = require('firebase');
const database = firebase.database();

const c = require("../index")

module.exports = async (client, message) => {

    if (!message.guild) return;

    const emoj = client.guilds.cache.get("545386837846523905");
    const emoji = emoj.emojis.cache.find(emoji => emoji.name === "cagliostro");
    const FREE = emoj.emojis.cache.find(emoji => emoji.name === "free");

    const menção = message.mentions.users.first()
    if(menção){
    if(menção.id === `${client.user.id}`) return message.channel.send(`${emoji}   Olá ${message.author.username}! Meu prefixo neste servidor é:  **${c.prefix}**   Para mais informações utilize: **${c.prefix}ajuda**`)
    };

//sistema de XP

    if (message.author.bot) return;
    if (message.channel.type == "dm") return;   

    if (message.content.startsWith(c.prefix)) return;

    global.xp = '';
    global.nextLevel = '';
    global.canal = '';
    let addpontos = Math.floor(Math.random() * 7) + 8;
    let nome  =  message.author.username

    database.ref(`Servidor/${message.guild.id}/Levels/${message.author.id}`)
        .once('value').then(async function (snap) {
            if (snap.val() == null) {
                database.ref(`Servidor/${message.guild.id}/Levels/${message.author.id}`)
                    .set({
                        name: nome,
                        xp: 0,
                        level: 1
                    })
            } else {
                xp = snap.val().xp + addpontos;
                nextLevel = snap.val().level * 2000;
                database.ref(`Servidor/${message.guild.id}/Levels/${message.author.id}`)
                    .update({
                        name: nome,
                        xp: xp,
                        nextLevel: nextLevel
                    })
                if (nextLevel <= xp) {
                    nextLevel = snap.val().level + 1;
                    database.ref(`Servidor/${message.guild.id}/Levels/${message.author.id}`)
                        .update({
                            level: nextLevel
                        })
                    database.ref(`Servidor/${message.guild.id}/Levels/${message.author.id}`)
                        .once('value').then(function (snap) {
                            let servidor = message.guild.id;
                            let server = client.guilds.cache.get(message.guild.id)
                            const levell = snap.val().level
                            let avatarr = message.author.avatarURL({ dynamic: true, format: 'png', size: 1024 })
                            let lEmbed =  new Discord.MessageEmbed()
                                .setThumbnail(avatarr)
                                .setImage("https://i.imgur.com/AG2HLso.gif")
                                .setTitle("``Parabéns!!``")
                                .setDescription(`${message.author.tag}`)
                                .addField(`Subiu de nível!`, `Nível: ${levell} \n ${message.guild.name}`)
                                .setColor("#3086c9")
                                .setFooter('')
                                .setTimestamp()

                            if (servidor) {
                                
                                message.channel.send(lEmbed)
                            
                            }
                        })
                        }
                  /*       if (message.content.toLowerCase() === 'level') {

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
                       }
                    */   }
         })
        
// fim do sistema de XP
//mensagem de AFK
if(message.mentions.members.first()) {

database.ref(`afk/${message.mentions.members.first().id}`)
  .once('value').then(async function (snap) {

    if (snap.val() == null) return;

    const Mensagem = snap.val().MensagemAFK

    message.reply(`${Mensagem}`);
  })

}
//integraçao com o bot de jogos gratis
if(message.author.id === "698117737175580692") {
    message.channel.send(`@everyone, Corre que tem Jogo Grátis. ${FREE}`)
    }

//salva o nome do servidor
    database.ref(`Servidor/${message.guild.id}/001: ${message.guild.name}`)
    .once('value').then(async function (snap) {
        if (snap.val() == null) {
            database.ref(`Servidor/${message.guild.id}/001: ${message.guild.name}`)
                .set({
                    nome: `${message.guild.name}`,
                    ID: `${message.guild.id}`
                })
                  } else {
                    database.ref(`Servidor/${message.guild.id}/001: ${message.guild.name}`)
                    .update({
                        nome: `${message.guild.name}`,
                        ID: `${message.guild.id}`
                    })
                }
            })


}

    