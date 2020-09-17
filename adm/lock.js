const Discord = require("discord.js")

exports.run = async (client, message) => { 

 if (!message.member.permissions.has("MANAGE_MESSAGES")) 
    return message.reply(`Você não tem permissão para isso. 😤`);
    
 if (message.content.includes("on")) {
 
 if (!client.lockit) client.lockit = []; 
 message.channel.createOverwrite(message.guild.id, {SEND_MESSAGES: false})
 message.channel.send `:lock: este canal foi trancado!`

} else if (message.content.includes("off")) {

  if (!client.lockit) client.lockit = []; 
  
 message.channel.createOverwrite(message.guild.id, {SEND_MESSAGES: null})
 message.channel.send `:unlock: este canal foi destrancado!`
} else {
   return message.channel.send("a forma correta é Lock on / Lock off");
 }

 };

 exports.help ={
    name:'lock',
    category: 'Administração',
    description: 'tranca | Destranca um canal.',
    usage: 'lock on | lock off',
    admin: true
  }  
  
   
  