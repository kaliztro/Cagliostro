const Discord = require("discord.js");
const config = require("../../config.json");
const p = require("../../index")

module.exports = {
  name: "teste",
  category: "outros",
  aliases: ["bunda"],
  usage: `teste.`,
  description: "Comando para testes.",
    run: async (client, message, args, member) => {
       
     

           // client.commands.forEach (async c => {

           // const command = client.commands.get(c.name)

           // message.channel.send(`${command.name} \n ${command.description}`)
            
            /*
           client.api.applications(client.user.id).guilds(message.guild.id).commands.post({
            data: {
              name: command.name,
              description: command.description,
              
            }
          })
            
*/
         //   })

      
         

          
         
    

    }
}

