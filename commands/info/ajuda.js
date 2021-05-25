const Discord = require("discord.js");
const config = require("../../config.json");
const p = require("../../index")

module.exports = {
    name: "ajuda",
    category: "info",
    aliases: ["aj"],
    description: "Mostra todos os comandos disponíveis do bot.",
    usage: `${p.prefix}ajuda ou ${p.prefix}ajuda <nome do comando>`,
    run: async (client, message, args, database) => {

      
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
      .setDescription(`Reagir de acordo com o que Procura!\n\n Na duvida use ${p.prefix}ajuda e o nome do comando \n\n📰 - Informações\n\n🛂 - Administração\n\n🎮 - Outros\n\n⚙️ - Config`)
      
  
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
        ajuda.setDescription(`**${p.prefix}ajuda [aj]**\n\n **${p.prefix}avatar  [av]**\n\n**${p.prefix}botinfo  [bi]**\n\n **${p.prefix}serverinfo [si]**\n\n **${p.prefix}userinfo [ui]** \n\n**${p.prefix}ping  [p]** \n\n **${p.prefix}tempo** \n\n**${p.prefix}ram**\n\n**${p.prefix}nivel**`)
        msg.edit(ajuda)
        
      })
    

      adm.on('collect', r2 => {

        ajuda.setTitle("Commandos de administraçao")
        ajuda.setDescription(`**${p.prefix}anuncio [an]**\n\n **${p.prefix}apagar [a]**\n\n **${p.prefix}expulsar**\n\n **${p.prefix}ban**\n\n **${p.prefix}mutar**\n\n**${p.prefix}lock on**\n\n **${p.prefix}lock off**\n\n**${p.prefix}serverlist [sl]**\n\n**${p.prefix}webhook [web] 1 / 2**\n\n**${p.prefix}cargo**`)
        msg.edit(ajuda)

      })

      outr.on('collect', r2 => {
          
        ajuda.setTitle("Outros commandos")
        ajuda.setDescription(`**${p.prefix}cor**\n\n**${p.prefix}8ball [8]**\n\n **${p.prefix}emoji**\n\n **${p.prefix}coinflip [cf]**\n\n **${p.prefix}jogardado [dado]**\n\n **${p.prefix}jogardados [dados]**\n\n **${p.prefix}sugestao [s]** \n`)
        msg.edit(ajuda)

      })
      
      configu.on('collect', r2 => {

        ajuda.setTitle("config do server!")
        ajuda.setDescription(`**${p.prefix}dentrada**\n Define o canal onde serão envidas as mensagens de boas vindas.\n**${p.prefix}dsaida**\n Define o canal onde serão envidas as mensagens de saida.\n**${p.prefix}dcargo**\nDefine um cargo padão para os novos membros.\n**${p.prefix}dsugestao**\nDefine um canal para as sugestoes\n**${p.prefix}dmute**\ndefine o cargo de mutado**${p.prefix}\nrentrada**\nRemove a mensagem de Bem vindo.\n**${p.prefix}rsaida**\nRemove a mensagem de saida.\n**${p.prefix}rcargo**\nRemove o cargo padrão.\n**${p.prefix}rsugestao**\nRemove o canal de sugestões\n**${p.prefix}rmute**\nRemove o cargo mutado`)

        msg.edit(ajuda)
          
        })

      inicio.on('collect', r2 => {

        ajuda.setTitle("Lista de comandos!")
        ajuda.setDescription(`Reagir de acordo com o que Procura!\n\n Na duvida use ${p.prefix}ajuda e o nome do comando \n\n📰 - Informações\n\n🛂 - Administração\n\n🎮 - Outros\n\n⚙️ - Config`)
        msg.edit(ajuda)
          
        })  
  
  })

}
    

   }
}