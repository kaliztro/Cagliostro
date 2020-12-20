const Discord = require("discord.js");
const config = require("../../config.json")

module.exports = {
  name: "apagardm",
  category: "adm",
  aliases: ["adm"],
  description: "Apaga mensagens enviadas na dm do bot.",
  usage: `no perfil do bot digite ${config.prefix}apagardm. obs vc também pode fazer isso em um canal de texto.`,
  run: async (client, message, args) => {
    message.react("✅");

  await message.author.createDM();
    await (await message.author.dmChannel.messages.fetch()).forEach( async (m)=> {
      if(m.author.bot){
        await m.delete();
      }
    });
  }
}


  
   