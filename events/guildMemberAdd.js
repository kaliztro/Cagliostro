const Discord = require('discord.js')
const db = require("quick.db")
const config = require("../config.json")

module.exports = async (client, member) => {

const guild = client.guilds.cache.get("545386837846523905");
const emoji = guild.emojis.cache.find(emoji => emoji.name === "awn");

  let chx = db.get(`welchannel_${member.guild.id}`);

  if(chx === null) { 
    return;
  }

  if (!member.user.bot){
  let embed = await new Discord.MessageEmbed()
      .setColor(config.cor)
      .setAuthor(member.user.tag, member.user.displayAvatarURL())
      .setTitle(`${emoji} Boas-vindas ${emoji}`)
      .setImage("https://i.imgur.com/QzfNwIE.gif")
      .setDescription(`**${member.user}**, bem-vindo(a) aos  **${guild.name}**! :heart: \n Qualquer duvida sobre os comandos do bot é so digitar **!ajuda**`)
      .setThumbnail(member.user.displayAvatarURL({ dynamic: true, format: "png", size: 1024 }))
      .setFooter('ID do usuario: ' + member.user.id)
      .setTimestamp();
  
  client.channels.cache.get(chx).send(embed) 

   }

  if (member.user.bot){
    let botembed = await new Discord.MessageEmbed()
  .setColor(config.cor)
  .setAuthor(member.user.tag, member.user.displayAvatarURL())
  .setTitle("ah não, um Bot acabou de entrar. 🤬")
  .setImage("")
  .setDescription(`${member.user} o que vc está fazendo aqui??`)
  .setThumbnail(member.user.displayAvatarURL({ dynamic: true, format: "png", size: 1024 }))
  .setTimestamp();
    client.channels.cache.get(chx).send(botembed)
 
    }

    if (!member.user.bot){

    let role = db.get(`role_${member.guild.id}`);

    if(role === null) { 
      return;
    }

    member.roles.add(role)
  }
}