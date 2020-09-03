const Discord = require('discord.js');
const config = require('../config.json');

exports.run = async (client, message, args) => {
	if (!message.member.permissions.has("MANAGE_MESSAGES"))
    return message.reply(
      "você é fraco, lhe falta permissão de `Gerenciar Mensagens` para usar esse comando"
    );

	if (message.content.includes("1")) {

	const parms = args.slice(" ");
	parms.shift()
	const splitarg = parms.join(" ").split(" / ");

	const subtitulo = splitarg[0]; // mensagem na embed 
	const mensagem = splitarg[1]; // titulo da embed 
	const titulo = splitarg[2]; // mensagem fora da embed

    const webhookClient = new Discord.WebhookClient(config.webhookID, config.webhookToken);
    
    const embed = new Discord.MessageEmbed()
    .setTitle(subtitulo)
    .setDescription(mensagem)
	.setColor('#3086c9');

    webhookClient.send(titulo, embed );

} else if (message.content.includes("2")) {

	const parms = args.slice(" ");
	parms.shift()
	const titulo2 = parms.join(" ");

    const webhookClient = new Discord.WebhookClient(config.webhookID, config.webhookToken);

    webhookClient.send(titulo2);

};

message.delete()

};

exports.help ={
    name:'web',
    category: 'anuncio',
    description: 'cria um webhook',
    usage: 'web 1 ou web 2 (web 1 envia com embed e web 2 envia normal)',
  }