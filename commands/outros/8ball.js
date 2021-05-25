const Discord = require('discord.js');
const config = require("../../config.json");
const p = require("../../index")

module.exports = {
    name: "8ball",
    category: "outros",
    aliases: ["8"],
    description: "Te da resposta para suas perguntas!",
    usage: `${p.prefix}8 e a sua pergunta, ou ${p.prefix}8ball e a sua pergunta.`,
    run: async (client, message, args) => {


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
        .setColor(config.cor)
        .addFields(
            { name: 'Pergunta: ', value: `${pergunta}`,},
            { name: `8ball: `, value: `${rand}`,},
        )
        .setTimestamp()
        .setThumbnail()
        .setFooter(message.author.tag, avatar)
        message.delete()
        
        message.channel.send(embed);
     
    }
}

   