const Discord = require('discord.js');

module.exports = {
    name: "tts",
    category: "adm",
    aliases: [],
    description: "Bot fala em voz alta o que for escrito.",
    usage: "tts #canal conteudo da mensagem",
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
    
        canal.send(fala, {
            tts: true
        });


    }
}