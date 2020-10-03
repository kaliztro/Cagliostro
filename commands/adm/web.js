const Discord = require('discord.js');
const config = require("../../config.json");

module.exports = {
    name: "webhook",
    category: "adm",
    aliases: ["web"],
    description: "Envia um webhook em um canal pré definido",
    usage: "web 1 Titulo de embed / mensagem da embed / titulo fora da embed (esse ultimo é opicional)\n ou \n web 2 mensagem (essa n tem embed)",
    run: async (client, message, args) => {

	if (!message.member.permissions.has("MANAGE_MESSAGES"))
    return message.reply(
      "poxa cara, parece que vc não tem permissão pra fazer isso, que pena 😥 "
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
	.setColor(config.cor);

    webhookClient.send(titulo, embed );

 } else if (message.content.includes("2")) {

	const parms = args.slice(" ");
	parms.shift()
	const titulo2 = parms.join(" ");

    const webhookClient = new Discord.WebhookClient(config.webhookID, config.webhookToken);

    webhookClient.send(titulo2);

    }else {
        return message.channel.send("a forma correta é web 1 Titulo de embed / mensagem da embed / titulo fora da embed (esse ultimo é opicional)\n ou \n web 2 mensagem (essa n tem embed)").then(msg => { 
            msg.delete({ timeout: 9000 })
        })
      }

    message.delete()

    }
}