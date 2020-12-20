const discord = require("discord.js")
const config = require("../../config.json")

module.exports = {
  name: "dstatus",
  description: "Altera o status do bot.",
  usage: `${config.prefix}dstatus <aqui>`,
  category: "dono",
  run: async (client, message, args, database) => {
    
    if(message.author.id != config.donoID) {
      return message.channel.send(`${message.author}, Tu deve estar doidão né?, só o dono do Bot pode executar esse comando. \n se quiser que eu saia pede para o Kaliztro#9240`)
    }
    
    if(!args.length) {
      return message.channel.send("Digite o novo status.")
    }
    const Mensagem = args.join(" ")
    
    database.ref(`DONO`)
    .once('value').then(async function (snap) {
        if (snap.val() == null) {
            database.ref(`DONO`)
                .set({
                  Status: `${Mensagem}`
                })
    
                message.channel.send(`O status definido foi: ${Mensagem}`)
                
                  } else {
                    database.ref(`DONO`)
                    .update({
                      Status: `${Mensagem}`
                    })
                    message.channel.send(`O status foi redefinido para: ${Mensagem}`)
                  }
                })
    
    
  }
}