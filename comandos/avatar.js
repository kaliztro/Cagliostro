const Discord = require("discord.js"); //Conexão com a livraria discord.js


exports.run = async (client, message, args) => { //estrutura básica de criação de um comando

  let user = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author;
  // Armazena em uma variável o membro por Menção OU pelo seu Id OU se nada foi fornecido, o user é o próprio Autor

  let avatar = user.avatarURL({ dynamic: true, format: 'png', size: 1024 });
  // Armazena o link do avatar do usuário em outra variável. A propriedade Dynamic converte automatimente a extensão da imagem para um gif se ela for animada.


  let embed = new Discord.MessageEmbed() // Declarando a criação do Embed
    .setColor(`#3086c9`) // Cor em hexadecimal
    .setTitle(`Avatar de ${user.username}`) // Título do embed 
    .setImage(avatar) // Aqui mostramos seu rostinho lindo
    .setFooter(`• Autor: ${message.author.tag}`, message.author.displayAvatarURL({format: "png"})); // Mensagem do rodapé
 await message.channel.send(embed); //Enviando o embed no chat

}; // cabou!

exports.help ={
  name:'avatar',
  category: 'info',
  description: 'Mostra o avatar do usuário ou de um bot.',
  usage: 'avatar @',
}  

