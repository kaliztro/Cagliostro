const Discord = require("discord.js");

module.exports = {
  name: "serverlist",
  category: "adm",
  aliases: ["sl"],
  description: "mostra os servidores em que o bot esta.",
  usage: "é só digitar o comando mesmo. 😆",
  run: async (client, message, args) => {

    if (!message.member.permissions.has("ADMINISTRATOR"))
    return message.reply("po cara , eu sei que é um comando inofensivo mas só ADM pode usar. sorry 💔 ");

client.guilds.cache.forEach(g => {
    console.log(`NOME:`, g.name, 'ID:', g.id);
    message.author.send('**Nome: **`' + g.name + '` **ID:** ' + '`'+ g.id + '`');
    
  });

  }
}