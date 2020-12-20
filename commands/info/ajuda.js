const Discord = require("discord.js");
const config = require("../../config.json");

module.exports = {
    name: "ajuda",
    category: "info",
    aliases: ["aj"],
    description: "Mostra todos os comandos disponíveis do bot.",
    usage: `${config.prefix}ajuda ou ${config.prefix}ajuda <nome do comando>`,
    run: async (client, message, args) => {

      if (args[0]) {
        const command = await client.commands.get(args[0]);
  
        if (!command) {
          return message.channel.send("Comando desconhecido: " + args[0]);
        }
  
        let embed = new Discord.MessageEmbed()
          .setAuthor(command.name, "https://i.imgur.com/2ubNTXm.png" )
          .addField("Descrição", command.description || "Não definido :(")
          .addField("Como usar:", "`" + command.usage + "`" || "Não definido")
          .addField("abreviação:", "`" + command.aliases + "`" || "Não possui")
          .setColor(config.cor)
  
        return message.channel.send(embed);

    } else {

      const ajuda = new Discord.MessageEmbed()
      .setTitle("Lista de comandos!")
      .setThumbnail("")
      .setColor(config.cor)
      .setDescription(`Reagir de acordo com o que Procura!\n\n Na duvida use ${config.prefix}ajuda e o nome do comando \n\n📰 - Informações\n\n🛂 - Administração\n\n🎮 - Outros\n\n⚙️ - Config`)
      
  
    message.channel.send(ajuda).then(msg => {
        msg.react('🌐').then(r => {
        msg.react('📰').then(r => {
        msg.react('🛂').then(r => {
        msg.react('🎮').then(r => {
        msg.react('⚙️').then(r => {

        })
        })
        })
        })
        }) 
 
       const infosFilter = (reaction, user) => reaction.emoji.name === '📰' && user.id === message.author.id;
       const admFilter = (reaction, user) => reaction.emoji.name === '🛂' && user.id === message.author.id;
       const outrFilter = (reaction, user) => reaction.emoji.name === '🎮' && user.id === message.author.id;
       const inicioFilter = (reaction, user) => reaction.emoji.name === '🌐' && user.id === message.author.id;
       const configuFilter = (reaction, user) => reaction.emoji.name === '⚙️' && user.id === message.author.id;
  
       const  infos =  msg.createReactionCollector(infosFilter);
       const  adm =  msg.createReactionCollector(admFilter);
       const  outr =  msg.createReactionCollector(outrFilter);
       const  inicio = msg.createReactionCollector(inicioFilter);
       const  configu = msg.createReactionCollector(configuFilter);
       
 
       infos.on('collect', r2 => {
 
        ajuda.setTitle("Commandos Informativos")
        ajuda.setDescription(`**${config.prefix}ajuda [aj]**\n\n **${config.prefix}avatar  [av]**\n\n**${config.prefix}botinfo  [bi]**\n\n **${config.prefix}serverinfo [si]**\n\n **${config.prefix}userinfo [ui]** \n\n**${config.prefix}ping  [p]** \n\n **${config.prefix}tempo** \n\n**${config.prefix}ram**\n\n**${config.prefix}nivel**`)
        msg.edit(ajuda)
        
      })
    

      adm.on('collect', r2 => {

        ajuda.setTitle("Commandos de administraçao")
        ajuda.setDescription(`**${config.prefix}anuncio [an]**\n\n **${config.prefix}apagar [a]**\n\n **${config.prefix}expulsar**\n\n **${config.prefix}ban**\n\n**${config.prefix}lock on**\n\n **${config.prefix}lock off**\n\n**${config.prefix}serverlist [sl]**\n\n**${config.prefix}sair**\n\n**${config.prefix}webhook [web] 1 / 2**`)
        msg.edit(ajuda)

      })

      outr.on('collect', r2 => {
          
        ajuda.setTitle("Outros commandos")
        ajuda.setDescription(`**${config.prefix}cor**\n\n**${config.prefix}8ball [8]**\n\n **${config.prefix}emoji**\n\n **${config.prefix}coinflip [cf]**\n\n **${config.prefix}jogardado [dado]**\n\n **${config.prefix}jogardados [dados]**\n`)
        msg.edit(ajuda)

      })
      
      configu.on('collect', r2 => {

        ajuda.setTitle("Lista de comandos!")
        ajuda.setDescription(`**${config.prefix}dentrada**\n Define o canal onde serão envidas as mensagens de boas vindas.\n**${config.prefix}dsaida**\n Define o canal onde serão envidas as mensagens de saida.\n**${config.prefix}dcargo**\nDefine um cargo padão para os novos membros.\n**${config.prefix}rentrada**\nRemove a mensagem de Bem vindo.\n**${config.prefix}rsaida**\nRemove a mensagem de saida.\n**${config.prefix}rcargo**\nRemove o cargo padrão.`)

        msg.edit(ajuda)
          
        })

      inicio.on('collect', r2 => {

        ajuda.setTitle("Lista de comandos!")
        ajuda.setDescription(`Reagir de acordo com o que Procura!\n\n Na duvida use ${config.prefix}ajuda e o nome do comando \n\n📰 - Informações\n\n🛂 - Administração\n\n🎮 - Outros\n\n⚙️ - Config`)
        msg.edit(ajuda)
          
        })  
  
  })

}

   }
}