const Discord = require('discord.js');

exports.run = (client, message, args) =>{

    if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("Você não possui permição para utilizar este comando.")
    
    message.channel.send(`Em qual canal você deseja anunciar?`).then(msg =>{
        let cp = message.channel.createMessageCollector(x => x.author.id === message.author.id, {max: 1}) 
        .on('collect', c => {
            canal = c.mentions.channels.first()
            if(!canal){
                message.reply('Mencione um canal!')
            } else{
                message.channel.send('Qual a menssagem desse anuncio?').then(msg2 =>{
                    let cl = message.channel.createMessageCollector(x => x.author.id === message.author.id, {max: 1})
                    .on('collect', c => {
                        desc = c.content

                        message.channel.send('Qual o titulo?').then(msg3 =>{
                            let ck = message.channel.createMessageCollector(x => x.author.id === message.author.id, {max: 1})
                            .on('collect', c =>{
                                tittle = c.content

                                message.channel.send(`Anuncio foi enviado com sucesso para ${canal}`)

                                let embed = new Discord.MessageEmbed()

                                .setColor('GOLD')
                                .setFooter(`Comando enfetuado por ${message.author.username}`,message.author.avatarURL)
                                .setTitle(tittle)
                                .setDescription(desc)
                                
                                canal.send(`@everyone`, embed)
                                 
                            })
                        })
                    })
                })
            }
        })
    })
}

exports.help ={
    name:'anuncio',
    category: 'Moderação',
    description: 'Faz um anuncio no canal escolhido.',
    usage: 'anuncio',
  }  