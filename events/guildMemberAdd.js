const Discord = require("discord.js")
const firebase = require('firebase');
const database = firebase.database();
const config = require('../config.json')

const c = require("../index")

module.exports = async (client, member, message, guild) => {

  database.ref(`Servidor/${member.guild.id}/Entrada`)
  .once('value').then(async function (snap) {

    if (snap.val() == null) return;
          
    const Mcanal = snap.val().canal

    if (!member.user.bot){

    let embed = new Discord.MessageEmbed()
      .setColor(config.cor)
      .setAuthor(member.user.tag, member.user.displayAvatarURL())
      .setTitle(`Boas-vindas`)
      .setImage("https://i.imgur.com/QzfNwIE.gif")
      .setDescription(`**${member.user}**, bem-vindo(a) aos** ${member.guild.name} **! :heart: \n Qualquer duvida sobre os comandos é so digitar **${c.prefix}ajuda**`)
      .setThumbnail(member.user.displayAvatarURL({ dynamic: true, format: "png", size: 1024 }))
      .setFooter(' ID do usuario: ' + member.user.id)
      .setTimestamp();

client.channels.cache.get(Mcanal).send(embed) 
   
    }

    if (member.user.bot){
      let botembed = new Discord.MessageEmbed()
        .setColor(config.cor)
        .setAuthor(member.user.tag, member.user.displayAvatarURL())
        .setTitle("ah não, um Bot acabou de entrar. 🤬")
        .setImage("")
        .setDescription(`${member.user} o que vc está fazendo aqui??`)
        .setThumbnail(member.user.displayAvatarURL({ dynamic: true, format: "png", size: 1024 }))
        .setTimestamp();
      client.channels.cache.get(Mcanal).send(botembed)
   
      }

      if (!member.user.bot){

        database.ref(`Servidor/${member.guild.id}/Entrada/Cargo`)
                 .once('value').then(async function (snap) {

                if (snap.val() == null) return;
          
                  let role = snap.val().CargoID
        
    
        member.roles.add(role)
      })

      }




    }) 


};