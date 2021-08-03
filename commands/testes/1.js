const Discord = require("discord.js")
const config = require("../../config.json")
const p = require("../../index")

module.exports = {
  name: "11",
  category: "teste",
  aliases: [],
  usage: `dentrada <#canal>`,
  description: "Define um cargo a todos os novos membros",
  run: (client, message, args, database) => {

let servidorID = message.guild.id

database.ref(`/Testando/` + servidorID ).set({
        mensagemID: `858072699388428328`,
        server: servidorID,
        cargoID: `769696929990443018`,
            })

            message.channel.send(`definido`)
        

 }
}

    

