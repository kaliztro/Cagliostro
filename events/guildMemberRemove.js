
const Discord = require('discord.js')

module.exports = async (client, member) => {

  if (!member.user.bot){

  let guild = await client.guilds.cache.get("545386837846523905");
  let channel = await client.channels.cache.get("691485505442938890");
  let emoji = await member.guild.emojis.cache.find(emoji => emoji.name === "emoji");
  if (guild != member.guild) {
    return console.log("Alguem saiu do servidor. Mas não é nesse, então tá tudo bem :)");
   } else {
    let embed = await new Discord.MessageEmbed()
    .setColor("#3086c9")
    .setAuthor(member.user.tag, member.user.displayAvatarURL())
    .setTitle(member.user.username + ' caiu fora')
    .setImage("")
    .setDescription(`**${member.user.username}**, saiu do servidor! :broken_heart:`)
    .setThumbnail(member.user.displayAvatarURL({ dynamic: true, format: "png", size: 1024 }))
    .setFooter('ID do usuario: ' + member.user.id)
    .setTimestamp();

    channel.send(embed);
  }

} else if (member.user.bot){
  
  let guild = await client.guilds.cache.get("545386837846523905");
  let channel = await client.channels.cache.get("691485505442938890");
  let nelson = await member.guild.emojis.cache.find(emoji => emoji.name === "haha");
  if (guild != member.guild) {
    return console.log("Não foi sesse servidor que o bot saiu :/") }
 channel.send(`${nelson} HA HA, O Bot ${member.user.username} foi expulso 🤣🤣🤣`)
 

}

};