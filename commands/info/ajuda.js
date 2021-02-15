const Discord = require("discord.js");
const config = require("../../config.json");

module.exports = {
    name: "ajuda",
    category: "info",
    aliases: ["aj"],
    description: "Mostra todos os comandos disponíveis do bot.",
    usage: `${config.prefix}ajuda ou ${config.prefix}ajuda <nome do comando>`,
    run: async (client, message, args, database) => {

      database.ref(`Servidor/${message.guild.id}/Prefix`)
      .once('value').then(async function (snap) {

        const prefix = snap.val().Prefix

      
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
      .setDescription(`Reagir de acordo com o que Procura!\n\n Na duvida use ${prefix}ajuda e o nome do comando \n\n📰 - Informações\n\n🛂 - Administração\n\n🎮 - Outros\n\n⚙️ - Config`)
      
  
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
        ajuda.setDescription(`**${prefix}ajuda [aj]**\n\n **${prefix}avatar  [av]**\n\n**${prefix}botinfo  [bi]**\n\n **${prefix}serverinfo [si]**\n\n **${prefix}userinfo [ui]** \n\n**${prefix}ping  [p]** \n\n **${prefix}tempo** \n\n**${prefix}ram**\n\n**${prefix}nivel**`)
        msg.edit(ajuda)
        
      })
    

      adm.on('collect', r2 => {

        ajuda.setTitle("Commandos de administraçao")
        ajuda.setDescription(`**${prefix}anuncio [an]**\n\n **${prefix}apagar [a]**\n\n **${prefix}expulsar**\n\n **${prefix}ban**\n\n **${prefix}mutar**\n\n**${prefix}lock on**\n\n **${prefix}lock off**\n\n**${prefix}serverlist [sl]**\n\n**${prefix}webhook [web] 1 / 2**\n\n**${prefix}cargo**`)
        msg.edit(ajuda)

      })

      outr.on('collect', r2 => {
          
        ajuda.setTitle("Outros commandos")
        ajuda.setDescription(`**${prefix}cor**\n\n**${prefix}8ball [8]**\n\n **${prefix}emoji**\n\n **${prefix}coinflip [cf]**\n\n **${prefix}jogardado [dado]**\n\n **${prefix}jogardados [dados]**\n\n **${prefix}sugestao [s]** \n`)
        msg.edit(ajuda)

      })
      
      configu.on('collect', r2 => {

        ajuda.setTitle("config do server!")
        ajuda.setDescription(`**${prefix}dentrada**\n Define o canal onde serão envidas as mensagens de boas vindas.\n**${prefix}dsaida**\n Define o canal onde serão envidas as mensagens de saida.\n**${prefix}dcargo**\nDefine um cargo padão para os novos membros.\n**${prefix}dsugestao**\nDefine um canal para as sugestoes\n**${prefix}dmute**\ndefine o cargo de mutado**${prefix}\nrentrada**\nRemove a mensagem de Bem vindo.\n**${prefix}rsaida**\nRemove a mensagem de saida.\n**${prefix}rcargo**\nRemove o cargo padrão.\n**${prefix}rsugestao**\nRemove o canal de sugestões\n**${prefix}rmute**\nRemove o cargo mutado`)

        msg.edit(ajuda)
          
        })

      inicio.on('collect', r2 => {

        ajuda.setTitle("Lista de comandos!")
        ajuda.setDescription(`Reagir de acordo com o que Procura!\n\n Na duvida use ${prefix}ajuda e o nome do comando \n\n📰 - Informações\n\n🛂 - Administração\n\n🎮 - Outros\n\n⚙️ - Config`)
        msg.edit(ajuda)
          
        })  
  
  })

}
      })

   }
}