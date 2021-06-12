const Discord = require("discord.js");
const config = require("../../config.json");
const p = require("../../index")

module.exports = {
    name: "sugestao",
    category: "info",
    aliases: ["s", "sac"],
    description: "use esse comando para enviar sugestões aos membros da adm do servidor.",
    usage: `sugestao <sua sugestao aqui>`,
    run: async (client, message, args, database) => {

message.delete();
const content = args.join(" ");

if (!args[0]) {
  return message.channel.send(`${message.author.username}, escreva a sugestão após o comando`)
} else if (content.length > 1000) {
  return message.channel.send(`${message.author.username}, forneça uma sugestão de no máximo 1000 caracteres.`);
} else {

   database.ref(`Servidor/${message.guild.id}/Canal de Sugestao`)
   .once('value').then(async function (snap){
    if (snap.val() == null) return message.channel.send(`Esse servidor não possui canal de sugestão. \n Use o comando **${p.prefix}dsugestao** para adicionar um novo canal ou contate um ADM.`);
          
    const canal = snap.val().canal


  const msg = await client.channels.cache.get(canal).send(
    new Discord.MessageEmbed()
    .setColor(config.cor)
    .addField("Autor:", message.author)
    .addField("Conteúdo", content)
    .setFooter("ID do Autor: " + message.author.id)
    .setTimestamp()
  );
  //await message.channel.send(`${message.author} Sua sugestão foi anotada!`);

  const emojis = ["✔️", "❎"];

  for (const i in emojis) {
    await msg.react(emojis[i])
  }
})

}

    }
}