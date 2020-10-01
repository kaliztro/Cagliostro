const Discord = require('discord.js')
const db = require("quick.db")
const config = require("../config.json")

module.exports = async (client, member) => {

  let chx = db.get(`saichannel_${member.guild.id}`);
  
  if(chx === null) { 
    return;
  }
  if (!member.user.bot){
  let saiembed = await new Discord.MessageEmbed()
  .setColor(config.cor)
  .setAuthor(member.user.tag, member.user.displayAvatarURL())
  .setTitle(member.user.username + ' caiu fora')
  .setImage("")
  .setDescription(`**${member.user.username}**, saiu do servidor! :broken_heart:`)
  .setThumbnail(member.user.displayAvatarURL({ dynamic: true, format: "png", size: 1024 }))
  .setFooter('ID do usuario: ' + member.user.id)
  .setTimestamp();
  
  client.channels.cache.get(chx).send(saiembed) 
  }
  if (member.user.bot){

    let guild = await client.guilds.cache.get("545386837846523905");
    let nelson = await member.guild.emojis.cache.find(emoji => emoji.id === "761014675466354689");

      let botembed = await new Discord.MessageEmbed()
    .setColor(config.cor)
    .setAuthor(member.user.tag, member.user.displayAvatarURL())
    .setTitle(`${nelson} HA HA`)
    .setImage("")
    .setDescription(`O Bot ${member.user.username} foi expulso 🤣🤣🤣`)
    .setThumbnail(member.user.displayAvatarURL({ dynamic: true, format: "png", size: 1024 }))
    .setTimestamp();
      client.channels.cache.get(chx).send(botembed)

  }
}


