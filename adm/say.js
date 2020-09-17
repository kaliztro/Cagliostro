const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  if (!message.member.permissions.has("MANAGE_MESSAGES"))
    return message.reply(
      "Tu não manda em mim. 🤬"
    );
message.delete()

const embed = new Discord.MessageEmbed()
    .setTitle("")
    .setThumbnail("")
    .setColor("#3086c9")
    .setDescription(args.join(" "))

  message.channel.send(embed);
};

exports.help ={
  name:'falar',
  category: 'Moderação',
  description: 'Bot fala o que for escrito.',
  usage: 'falar',
  admin: true
}