const Discord = require("discord.js")
const config = require("../../config.json")
const p = require("../../index")

module.exports = {
  name: "22",
  category: "teste",
  aliases: [],
  usage: `dentrada <#canal>`,
  description: "Define um cargo a todos os novos membros",
  run: (client, message, args, database) => {

    

    let servidorID = message.guild.id

    database.ref(`/Testando/`  + servidorID )
    .once('value').then(async function (snap) {

        if (snap.val() == null) return;
              
        const Mcanal = snap.val().CargoID
  
        message.channel.send(`definido ${Mcanal}`)
    })


  }
}


  