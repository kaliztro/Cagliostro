const Discord = require("discord.js")
const disbut = require("discord-buttons");
const config = require("../../config.json");

module.exports = {
  name: "freegame",
  category: "adm",
  aliases: ["free"],
  usage: `freegame ou free`,
  description: "Cargo por reacao.",
  run: async (client, message, args, guild) => {

    if (!message.member.permissions.has("ADMINISTRATOR"))
    return message.reply("🛑 Parece que vc está tentando usar um comando que é permitido somente aos ADMs 🛑");

  const embed = new Discord.MessageEmbed()
  .setTitle("Para receber notificação de jogos grátis basta clicar no botão abaixo.")
  .setThumbnail("")
  .setColor(config.cor)
  
  let button1 = new disbut.MessageButton()
  .setStyle('green')
  .setLabel('Eu quero.') 
  .setEmoji(`💯`) // adiciona um emoji no botao
  .setID('cargofreegame') // coloca uma id para fazer uma acao
  .setDisabled(false) 

  let button2 = new disbut.MessageButton()
  .setStyle('red') // tipo ou cor
  .setLabel('Não quero.') // titulo do botao
  .setEmoji(`💢`)
  .setID('removercargofreegame') // ainda n sei
  .setDisabled(false) // torna ele clicavel ou nao

  let row = new disbut.MessageActionRow()
  .addComponents(button1, button2);
  
message.channel.send(embed, row);

  }
}

