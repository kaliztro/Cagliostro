
const Discord = require('discord.js')

module.exports = async (client, member) => {

  if (!member.user.bot){

  let guild = await client.guilds.cache.get("545386837846523905");
  let channel = await client.channels.cache.get("691485505442938890");
  var role = member.guild.roles.cache.get("734934943804817469");
  let emoji = await member.guild.emojis.cache.find(emoji => emoji.name === "emoji");
  if (guild != member.guild) {
    return console.log("Sem boas-vindas pra você! Sai daqui.");
   } else {
      let embed = await new Discord.MessageEmbed()
      .setColor("#3086c9")
      .setAuthor(member.user.tag, member.user.displayAvatarURL())
      .setTitle(`${emoji} Boas-vindas ${emoji}`)
      .setImage("https://i.imgur.com/QzfNwIE.gif")
      .setDescription(`**${member.user}**, bem-vindo(a) aos  **${guild.name}**! :heart: \n Qualquer duvida sobre os comandos do bot é so digitar **!ajuda**`)
      .setThumbnail(member.user.displayAvatarURL({ dynamic: true, format: "png", size: 1024 }))
      .setFooter('ID do usuario: ' + member.user.id)
      .setTimestamp();

    channel.send(embed);
    member.roles.add(role);
  }

} else if (member.user.bot){
  let channel = await client.channels.cache.get("691485505442938890");
  var Brole = member.guild.roles.cache.get("701920380259926017");
  if (guild != member.guild) {
    return console.log("ufa, o Bot não é desse servidor") }
 channel.send(`Um Bot acabou de entrar. 🤬\n ${member.user} o que vc está fazendo aqui??`)
 member.roles.add(Brole)  

}

};