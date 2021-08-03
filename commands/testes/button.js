const Discord = require("discord.js")


module.exports = {
  name: "button",
  category: "outros",
  aliases: [""],
  usage: `senha.`,
  description: "Comando de button.",
  run: async (client, message, args, guild) => {
 
  const disbut = require("discord-buttons");

  let verificacao = !message.member.permissions.has("ADMINISTRATOR") === true 

  let button1 = new disbut.MessageButton()
  .setStyle('url')
  .setURL('http://parceirosdaloucura.glitch.me/') 
  .setLabel('Link do site!'); 
  
  let button2 = new disbut.MessageButton()
  .setStyle('green')
  .setLabel('Cargo.') 
  .setID('button2') 
  .setDisabled(false) 

  let button3 = new disbut.MessageButton()
  .setStyle('red') // tipo ou cor
  .setLabel('Remover Bot.') // titulo do botao
  .setID('Removerbot') // ainda n sei
  .setDisabled(verificacao) // torna ele clicavel ou nao

  let row = new disbut.MessageActionRow()
  .addComponents(button1, button2, button3);
  
message.channel.send('Escolha com sabedoria', row);

  }
}

