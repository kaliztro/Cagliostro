const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {

    var list = [
        'Sim.',
        'Não.',
        'Talvez.',
        'Não posso opinar sobre isso.',
        'Sei de nada o-0.',
        'Provavelmente sim.',
        'Provavelmente não.',
        'Não sei.',
        'Meus instintos dizem que sim e eles nunca erram.',
        'Hmm acho que não.',
        'Ah sei de nada não...fui!',
        'Isso é meio obvio.'
        ];

    var rand = list[Math.floor(Math.random()* list.length)];
    let pergunta = args.slice(0).join(" ");{
    if (!pergunta) return message.reply('Ops! o formato desse comando é \`<8ball>\` \`<pergunta>\`.')}
    let avatar = message.author.displayAvatarURL({format:"png"});
        const embed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .addFields(
            { name: 'Pergunta: ', value: `${pergunta}`,},
            { name: `Cagliostro: `, value: `${rand}`,},
        )
        .setTimestamp()
        .setThumbnail()
        .setFooter(message.author.tag, avatar)
        message.delete()
        
        message.channel.send(embed);
     
    };

    
    exports.help ={
        name:'8ball',
        category: 'Diversão',
        description: 'Te da resposta para suas perguntas!.',
        usage: '8ball pergunta',
      }  