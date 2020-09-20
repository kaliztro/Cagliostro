const Discord = require("discord.js");
const config = require("../../config.json");

module.exports = {
    name: "avatar",
    category: "info",
    aliases: ["av"],
    description: "Mostra o seu avatar, ou o avatar de quem vc mencionar.",
    usage: "!avatar @usuario, ou somente !avatar para ver o seu proprio avatar.",
    run: async (client, message, args) => {

        let user = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author;
        
        let avatar = user.avatarURL({ dynamic: true, format: 'png', size: 1024 });
        
      
      
        let embed = new Discord.MessageEmbed()
          .setColor(config.cor) 
          .setTitle(`Avatar de ${user.username}`) 
          .setImage(avatar) 
          .setFooter(`• Autor: ${message.author.tag}`, message.author.displayAvatarURL({format: "png"})); 
       await message.channel.send(embed); 

    }
}