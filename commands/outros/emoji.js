const Discord = require("discord.js");
const config = require("../../config.json")

module.exports = {
  name: "emoji",
  category: "outros",
  aliases: [""],
  usage: `${config.prefix}emoji e o nome do emoji.`,
  description: "Envia o emoji escolhido no chat.",
  run: async (client, message, args) => {

  message.delete();
  if (!args[0])
    return message.channel.send(
      `**${message.author.username}, a sintaxe correta é:** ` +
        "`" +
        "!emoji nomedoemoji`"
    ); //Troque a exclamação ! da mensagem acima pelo seu prefixo
  let emoji = message.guild.emojis.cache.find(emoji => emoji.name === args[0]);

  if (!emoji) {
    message.channel.send(
      "`" + args[0] + "` **não é um emoji deste servidor.**"
    );
  } else if (emoji.animated === true) {
    message.channel.send(`<a:${args[0]}:${emoji.id}>`);
  } else {
    message.channel.send(`<:${args[0]}:${emoji.id}>`);
  }
  }
};

