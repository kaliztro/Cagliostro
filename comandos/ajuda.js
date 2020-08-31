const Discord = require("discord.js");
const config = require("../config.json");

module.exports.run = async (client, message, args) => {

     const ajuda = new Discord.MessageEmbed()
     .setTitle("Lista de comandos!")
     .setThumbnail("")
     .setColor("#3086c9")
     .setDescription("Reagir de acordo com o que Procura!\n\n📰 - Informações\n\n🛂 - Administração\n\n🎮 - Diversão\n\n🎶 - Musica")
     
 
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
      const funFilter = (reaction, user) => reaction.emoji.name === '🎮' && user.id === message.author.id;
      const musicFilter = (reaction, user) => reaction.emoji.name === '🎶' && user.id === message.author.id;
      const inicioFilter = (reaction, user) => reaction.emoji.name === '🌐' && user.id === message.author.id;
 
      const  infos =  msg.createReactionCollector(infosFilter);
      const  adm =  msg.createReactionCollector(admFilter);
      const  fun =  msg.createReactionCollector(funFilter);
      const  music =  msg.createReactionCollector(musicFilter);
      const  inicio = msg.createReactionCollector(inicioFilter);
      

      infos.on('collect', r2 => {

        ajuda.setTitle("Commandos Informativos")
        ajuda.setDescription(`**${config.prefix}ajuda**\n Mostra os comandos disponiveis\n **${config.prefix}avatar**\n Mostra o avatar do usuário ou de um bot.\nComo usar: ${config.prefix}avatar @nome do usuario\n **${config.prefix}botinfo**\n Mostra as informações do bot.\n **${config.prefix}serverinfo**\n Mostra as informações do server.\n **${config.prefix}userinfo** \nMostra as informações do usuario.\n**${config.prefix}ping** \n Mostra o tempo que o Bot esta Online.\n **${config.prefix}tempo** \n Mostra o tempo que o Bot esta online.`)
        msg.edit(ajuda)
        
      })
    

      adm.on('collect', r2 => {

        ajuda.setTitle("Commandos de administraçao")
        ajuda.setDescription(`Utlize **${config.prefixADM}** para os comandos.\n**${config.prefixADM}anuncio**\n Faz um anuncio no canal escolhido.\n **${config.prefixADM}apagar**\n Apaga mensagens de um canal.\n **${config.prefixADM}expulsar**\n Expulsa um membro do servidor.\n Como usar: ${config.prefixADM}expulsar @nome do usuario  motivo\n **${config.prefixADM}ban**\n Bane um membro do servidor.\n Como usar ${config.prefixADM}ban @nome do usuario motivo.\n **${config.prefixADM}lock**\n Tranca o canal.\n **${config.prefixADM}unlock**\n Destranca o canal.\n**${config.prefixADM}ram**\n Mostra a ram que o bot esta usando.\n**${config.prefixADM}serverlist**\n Mostra os servidores em que o Bot está.\n**${config.prefixADM}sair**\n sai do servidor escolhido.\n**${config.prefixADM}web 1 / 2**`)
        msg.edit(ajuda)

      })

      fun.on('collect', r2 => {
          
        ajuda.setTitle("Commandos de diversão")
        ajuda.setDescription(`**${config.prefix}cor**\n Muda a cor do seu nick.\n**${config.prefix}8ball**\n Te da resposta para suas perguntas!.\n **${config.prefix}emoji**\n Envia um emoji no chat.\n Como usar: ${config.prefix}emoji nome do emoji\n **${config.prefix}coinflip**\n Jogo de Cara ou Coroa.\n **${config.prefix}jogardado**\n Joga o dado. 🎲.\n **${config.prefix}jogardados**\n Joga os dados. 🎲🎲.`)
        msg.edit(ajuda)

      })
      
      music.on('collect', r2 => {
          
        ajuda.setTitle("Commandos de musica")
        ajuda.setDescription(`**m!play**\n Toca a musica.\n**m!pause**\n Pausa a musica.\n**m!resume**\n Retoma a reprodução de música atualmente.\n**m!stop**\n Para a musica.\n**m!skip**\n Pula a musica.\n**m!skipto**\n Pula para o número da fila selecionado.\n**m!loop**\n Deixa a musica em loop.\n**m!lyrics**\n Exibe a letra da musica que esta tocando.\n**m!playlist**\n Toca uma playlist do youtube.\n**m!pruning**\n Alternar remoção de mensagens de bot.\n**m!queue**\n Mostrar a fila de músicas e agora em reprodução.\n**m!remove**\n Remove musica da fila.\n**m!search**\n Pesquise e selecione vídeos para reproduzir.\n**m!shuffle**\n Deixa a fila aleatória.\n**m!volume**\n Alterar o volume da música atualmente sendo reproduzida. `)
        msg.edit(ajuda)

        

      })

      inicio.on('collect', r2 => {

        ajuda.setTitle("Lista de comandos!")
        ajuda.setDescription('Reagir de acordo com o que Procura!\n\n📰 - Informações\n\n🛂 - Administração\n\n🎮 - Diversão\n\n🎶 - Musica')
        msg.edit(ajuda)
        
      })

})

}

exports.help ={
  name:'ajuda',
  category: 'info',
  description: 'Mostra todos os comandos disponíveis do bot.',
  usage: 'ajuda',
}  