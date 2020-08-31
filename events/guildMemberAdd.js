
const Discord = require('discord.js')

module.exports = async (client, member) => {


  let guild = await client.guilds.cache.get("545386837846523905");
  let channel = await client.channels.cache.get("691485505442938890");
  let emoji = await member.guild.emojis.cache.find(emoji => emoji.name === "awn");
  if (guild != member.guild) {
    return console.log("Sem boas-vindas pra você! Sai daqui.");
   } else {
      let embed = await new Discord.MessageEmbed()
      .setColor("#3086c9")
      .setAuthor(member.user.tag, member.user.displayAvatarURL())
      .setTitle(`${emoji} Boas-vindas ${emoji}`)
      .setImage("https://i.imgur.com/QzfNwIE.gif")
      .setDescription(`**${member.user}**, bem-vindo(a) aos  **${guild.name}**! :heart:`)
      .setThumbnail(member.user.displayAvatarURL({ dynamic: true, format: "png", size: 1024 }))
      .setFooter('ID do usuario: ' + member.user.id)
      .setTimestamp();

    channel.send(embed);
  }

// define um cargo para um ususario novo
  console.log('User ' + member.user.username + ' entrou no servidor!') 
 //var role = member.guild.roles.cache.find(role => role.name === 'Membro');
 var role = member.guild.roles.cache.get("734934943804817469");
  member.roles.add(role) 
};