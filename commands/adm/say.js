const Discord = require("discord.js");
const config = require("../../config.json");
const p = require("../../index")

module.exports = {
  name: "say",
  category: "adm",
  aliases: ["say"],
  description: "Bot fala o que for escrito sé que em Embed.",
  usage: `no canal em que vc quer mandar a mensagem, digite ${p.prefix}say e o conteudo da mensagem`,
  run: async (client, message, args) => {
  
  if (!message.member.permissions.has("MANAGE_MESSAGES"))
    return message.reply(
      "Tu não manda em mim. 🤬"
    );
message.delete()

const embed = new Discord.MessageEmbed()
    .setTitle("")
    .setThumbnail("")
    .setColor(config.cor)
    .setDescription(args.join(" "))

  message.channel.send(embed);
  }
}
