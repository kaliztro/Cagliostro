
  const Discord = require('discord.js')

  module.exports = {
    name: "falardm",
    category: "adm",
    aliases: ["fdm"],
    description: "Bot fala o que for escrito para o usuario mencinado no privado.",
    usage: "falar @usuario conteudo da mensagem",
    run: async (client, message, args) => {

    if (!message.member.permissions.has("MANAGE_MESSAGES"))
      return message.reply(
        "🤬 porque não fala vc mesmo?"
      );
  
        let guild = message.guild
    
        let parms = args.slice(' '); 
        parms.shift();
        msg = parms.join(' ')
  
    
        let usuario = client.users.cache.get(args[0]) || client.users.cache.find(u => u.username.toLowerCase() == args.join(" ").toLowerCase()) || message.mentions.users.first()    
        if(!usuario) {
            message.delete()
            message.reply ("Você precisa dizer uma pessoa!").then(msg => msg.delete({timeout: 5000}))
        }
    
        if(!msg) {
            message.reply("Você precisa de uma mensagem!").then(msg => msg.delete({timeout: 3000}))
            message.delete()
        }
        if(usuario.id === message.author.id) return message.reply("Você é tão sozinho ao ponto de enviar mensagens pra você mesmo?")
    
        message.delete()
        await usuario.send(`${msg}`).catch(err => console.log(err))
    
    }
}