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

	const tituloDaEmbed = splitarg[0]; // mensagem na embed 
	const mensagem = splitarg[1]; // titulo da embed 
	const titulo = splitarg[2]; // mensagem fora da embed

const embed = new Discord.MessageEmbed()
	.setTitle(tituloDaEmbed)
	.setColor('#3086c9')
	.setDescription(mensagem);

	const channel = client.channels.cache.get('735232543900827710');
	try {
		const webhooks = await channel.fetchWebhooks();
		const webhook = webhooks.first();

		await webhook.send( titulo, {
			username: 'Cagliostro',
			avatarURL: 'https://i.imgur.com/wsfxHzS.png',
			embeds: [embed],
		});
	} catch (error) {
		console.error('Error trying to send: ', error);
	}
} else if (message.content.includes("2")) {

	const parms = args.slice(" ");
	parms.shift()
	const titulo = parms.join(" ");

	const channel = client.channels.cache.get('735232543900827710');
	try {
		const webhooks = await channel.fetchWebhooks();
		const webhook = webhooks.first();

		await webhook.send( titulo, {
			username: 'Cagliostro',
			avatarURL: 'https://i.imgur.com/wsfxHzS.png',
		});
	} catch (error) {
		console.error('Error trying to send: ', error);
	}
};

	message.delete()

};

exports.help ={
    name:'web',
    category: 'anuncio',
    description: 'cria um webhook',
    usage: 'web 1 ou web 2 (web 1 envia com embed e web 2 envia normal)',
  }