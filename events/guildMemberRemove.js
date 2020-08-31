const Discord = require('discord.js')

module.exports = async (client, member) => {

  //mensagem de saida

  let guild = await client.guilds.cache.get("545386837846523905");
  let channel = await client.channels.cache.get("691485505442938890");
  let emoji = await member.guild.emojis.cache.find(emoji => emoji.name === "nomedoemoji");
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
}