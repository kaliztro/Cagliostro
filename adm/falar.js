const Discord = require('discord.js');

exports.run = (client, message, args) =>{
    if (!message.member.permissions.has("MANAGE_MESSAGES"))
    return message.reply(
      "você é fraco, lhe falta permissão de `Gerenciar Mensagens` para usar esse comando"
    );

    var fala = args.slice(1).join(" ");
    if(!fala) return message.reply('Ops! o formato desse comando é \`<canal>\` \`<mensagem>\`.');

    var canal = message.mentions.channels.first() || message.guild.channels.cache.get(args[0])
    if(!canal)return message.reply('Ops! o formato desse comando é \`<canal>\` \`<mensagem>\`.');
    message.delete()

    canal.send(fala);

}

exports.help ={
  name:'falar',
  category: 'Moderação',
  description: 'Bot fala o que for escrito.',
  usage: 'falar',
  admin: true
}