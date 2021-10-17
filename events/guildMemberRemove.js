const Discord = require("discord.js")
const firebase = require('firebase');
const database = firebase.database();
const config = require('../config.json')

module.exports = async (client, member, message, guild) => {

  database.ref(`Servidor/${member.guild.id}/Saida`)
  .once('value').then(async function (snap) {

    if (snap.val() == null) return;
          
    const Mcanal = snap.val().canal
    const Mserver = snap.val().server

    if (!member.user.bot){

    let embed = new Discord.MessageEmbed()
    .setColor(config.cor)
    .setAuthor(member.user.tag, member.user.displayAvatarURL())
    .setTitle(member.user.username + ' caiu fora')
    .setImage("")
    .setDescription(`**${member.user.username}**, saiu do servidor! :broken_heart:`)
    .setThumbnail(member.user.displayAvatarURL({ dynamic: true, format: "png", size: 1024 }))
    .setFooter('ID do usuario: ' + member.user.id)
    .setTimestamp();

client.channels.cache.get(Mcanal).send(embed) 
   
    }

    if (member.user.bot){

        let guild = await client.guilds.cache.get("545386837846523905");
        let nelson = await member.guild.emojis.cache.find(emoji => emoji.id === "899411847181119508");

      let botembed = new Discord.MessageEmbed()
    .setColor(config.cor)
    .setAuthor(member.user.tag, member.user.displayAvatarURL())
    .setTitle(`${nelson} HA HA`)
    .setImage("")
    .setDescription(`O Bot ${member.user.username} foi expulso 🤣🤣🤣`)
    .setThumbnail(member.user.displayAvatarURL({ dynamic: true, format: "png", size: 1024 }))
    .setTimestamp();
      client.channels.cache.get(Mcanal).send(botembed)
   
      }

    }) 


};