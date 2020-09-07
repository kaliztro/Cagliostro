const Discord = require("discord.js");


exports.run = async (client, message, args) => {

  await message.author.createDM();
    await (await message.author.dmChannel.messages.fetch()).forEach( async (m)=> {
      if(m.author.bot){
        await m.delete();
      }
    });


};

exports.help ={
    name:'apagardm',
    category: 'Moderação',
    description: 'Apaga mensagens denviadas na dm do bot.',
    usage: 'apagardm',
    admin: true
  }  
  
   