const Discord = require("discord.js");

module.exports = {
  name: "apagardm",
  category: "adm",
  aliases: ["adm"],
  description: "Apaga mensagens enviadas na dm do bot.",
  usage: "no perfil do bot digite !apagardm. obs vc também pode fazer isso em um canal de voz.",
  run: async (client, message, args) => {

  await message.author.createDM();
    await (await message.author.dmChannel.messages.fetch()).forEach( async (m)=> {
      if(m.author.bot){
        await m.delete();
      }
    });
  }
}


  
   