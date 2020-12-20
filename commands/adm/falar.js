const Discord = require('discord.js');
const config = require("../../config.json")

module.exports = {
    name: "falar",
    category: "adm",
    aliases: ["f"],
    description: "Bot fala o que for escrito.",
    usage: `${config.prefix}falar #canal conteudo da mensagem`,
    run: async (client, message, args) => {

        if (!message.member.permissions.has("MANAGE_MESSAGES"))
        return message.reply(
          "Você não manda em mim. 😡"
        );
    
        var fala = args.slice(1).join(" ");
        if(!fala) return message.reply('Ops! o formato desse comando é \`<canal>\` \`<mensagem>\`.');
    
        var canal = message.mentions.channels.first() || message.guild.channels.cache.get(args[0])
        if(!canal)return message.reply('Ops! o formato desse comando é \`<canal>\` \`<mensagem>\`.');
        message.delete()
    
        canal.send(fala);

    }
}