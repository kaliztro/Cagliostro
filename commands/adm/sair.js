const Discord = require("discord.js");

module.exports = {
  name: "sair",
  category: "adm",
  aliases: ["sair"],
  description: "sai do servidor selecionado.",
  usage: "digite !sair e o id do servidor. obs: somente o dono do bot pode usar esse comando.",
  run: async (client, message, args) => {

if (message.member.user.id == '459559578648969227' ) {
}else{ return message.reply('Tu deve estar doidão né?, só o dono do Bot pode executar esse comando. \n se quiser que eu saia pede para o Kaliztro#9240') }

const servidor = args.join(" ") 
const guild = client.guilds.cache.get(servidor);

client.guilds.cache.get(servidor).leave() 
message.channel.send(`eu sai do servidor: **${guild.name}** ID: **${servidor}**`);

}
}

