const Discord = require("discord.js");
const config = require("../../config.json");

module.exports = {
    name: "ajuda",
    category: "info",
    aliases: ["aj"],
    description: "Mostra todos os comandos disponíveis do bot.",
    run: async (client, message, args) => {

      const ajuda = new Discord.MessageEmbed()
      .setTitle("Lista de comandos!")
      .setThumbnail("")
      .setColor(config.cor)
      .setDescription("Reagir de acordo com o que Procura!\n\n📰 - Informações\n\n🛂 - Administração\n\n🎮 - Outros\n\n🎶 - Musica")
      
  
    message.channel.send(ajuda).then(msg => {
        msg.react('📰').then(r => {
        msg.react('🛂').then(r => {
        msg.react('🎮').then(r => {
        msg.react('🎶').then(r => {
        msg.react('🌐').then(r => {
 
        })
        })
        })
        })
        }) 
 
       const infosFilter = (reaction, user) => reaction.emoji.name === '📰' && user.id === message.author.id;
       const admFilter = (reaction, user) => reaction.emoji.name === '🛂' && user.id === message.author.id;
       const outrFilter = (reaction, user) => reaction.emoji.name === '🎮' && user.id === message.author.id;
       const musicFilter = (reaction, user) => reaction.emoji.name === '🎶' && user.id === message.author.id;
       const inicioFilter = (reaction, user) => reaction.emoji.name === '🌐' && user.id === message.author.id;
  
       const  infos =  msg.createReactionCollector(infosFilter);
       const  adm =  msg.createReactionCollector(admFilter);
       const  outr =  msg.createReactionCollector(outrFilter);
       const  music =  msg.createReactionCollector(musicFilter);
       const  inicio = msg.createReactionCollector(inicioFilter);
       
 
       infos.on('collect', r2 => {
 
        ajuda.setTitle("Commandos Informativos")
        ajuda.setDescription(`**${config.prefix}ajuda [aj]**\n Mostra os comandos disponiveis\n **${config.prefix}avatar  [av]**\n Mostra o avatar do usuário ou de um bot.\nComo usar: ${config.prefix}avatar @nome do usuario\n **${config.prefix}botinfo  [bi]**\n Mostra as informações do bot.\n **${config.prefix}serverinfo [si]**\n Mostra as informações do server.\n **${config.prefix}userinfo [ui]** \nMostra as informações do usuario.\n**${config.prefix}ping  [p]** \n Mostra o ping do Bot.\n **${config.prefix}tempo** \n Mostra o tempo que o Bot esta online.\n**${config.prefix}ram**\n Mostra a ram que o bot esta usando.`)
        msg.edit(ajuda)
        
      })
    

      adm.on('collect', r2 => {

        ajuda.setTitle("Commandos de administraçao")
        ajuda.setDescription(`**${config.prefix}anuncio [an]**\n Faz um anuncio no canal escolhido.\n **${config.prefix}apagar [a]**\n Apaga mensagens de um canal.\n **${config.prefix}expulsar**\n Expulsa um membro do servidor.\n Como usar: ${config.prefix}expulsar @nome do usuario  motivo\n **${config.prefix}ban**\n Bane um membro do servidor.\n Como usar ${config.prefix}ban @nome do usuario motivo.\n **${config.prefix}lock on**\n Tranca o canal.\n **${config.prefix}lock off**\n Destranca o canal.\n**${config.prefix}serverlist [sl]**\n Mostra os servidores em que o Bot está.\n**${config.prefix}sair**\n sai do servidor escolhido.\n**${config.prefix}webhook [web] 1 / 2**`)
        msg.edit(ajuda)

      })

      outr.on('collect', r2 => {
          
        ajuda.setTitle("Outros commandos")
        ajuda.setDescription(`**${config.prefix}cor**\n Muda a cor do seu nick.\n**${config.prefix}8ball [8]**\n Te da resposta para suas perguntas!.\n **${config.prefix}emoji**\n Envia um emoji no chat.\n Como usar: ${config.prefix}emoji nome do emoji\n **${config.prefix}coinflip [cf]**\n Jogo de Cara ou Coroa.\n **${config.prefix}jogardado [dado]**\n Joga o dado. 🎲.\n **${config.prefix}jogardados [dados]**\n Joga os dados. 🎲🎲.`)
        msg.edit(ajuda)

      })
      
      music.on('collect', r2 => {
          
        ajuda.setTitle("Commandos de musica")
        ajuda.setDescription(`**m!play [p]**\n Toca a musica.\n**m!pause**\n Pausa a musica.\n**m!resume [r]**\n Retoma a reprodução de música atualmente.\n**m!stop**\n Para a musica.\n**m!skip [s]**\n Pula a musica.\n**m!skipto [st]**\n Pula para o número da fila selecionado.\n**m!loop [l]**\n Deixa a musica em loop.\n**m!lyrics [ly]**\n Exibe a letra da musica que esta tocando.\n**m!playlist [pl]**\n Toca uma playlist do youtube.\n**m!pruning**\n Alternar remoção de mensagens de bot.\n**m!queue [q]**\n Mostrar a fila de músicas e agora em reprodução.\n**m!remove **\n Remove musica da fila.\n**m!search**\n Pesquise e selecione vídeos para reproduzir.\n**m!shuffle**\n Deixa a fila aleatória.\n**m!volume [v]**\n Alterar o volume da música atualmente sendo reproduzida. `)
        msg.edit(ajuda)

        

      })

      inicio.on('collect', r2 => {

        ajuda.setTitle("Lista de comandos!")
        ajuda.setDescription('Reagir de acordo com o que Procura!\n\n📰 - Informações\n\n🛂 - Administração\n\n🎮 - Outros\n\n🎶 - Musica')
        msg.edit(ajuda)
          
        })
  
  })

   }
}