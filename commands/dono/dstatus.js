const discord = require("discord.js")
const config = require("../../config.json")
const p = require("../../index")

module.exports = {
  name: "dstatus",
  description: "Altera o status do bot.",
  usage: `dstatus <aqui>`,
  category: "dono",
  run: async (client, message, args, database) => {
    
    if(message.author.id != config.donoID) {
      return message.channel.send(`${message.author}, Tu deve estar doidão né?, só o dono do Bot pode alterar a mensagem de status.`)
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