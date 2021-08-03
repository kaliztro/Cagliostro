const Discord = require('discord.js')
const { donoID, cor, config } = require("../config.json")

const firebase = require('firebase');
const database = firebase.database();

module.exports = async (client, button,  message) => {
  
 database.ref(`Servidor/${button.guild.id}/FreeGame`)
    .once('value').then(async function (snap) {

    if (snap.val() == null) return  message.channel.send(`Cargo não definido.`).then(msg => msg.delete({timeout: 5000})); 
          
     let role = snap.val().cargo
     let usuario = button.clicker.member

     if (button.id === `cargofreegame`) {

        usuario.roles.add(role)
        button.channel.send(`Feito! agora vc receberá uma notificação quando algum jogo estiver gratuito.`).then(msg => msg.delete({timeout: 5000}));

    }

    if (button.id === `removercargofreegame`) {

        usuario.roles.remove(role)
        button.channel.send(`Feito! agora vc não sera notificado.`).then(msg => msg.delete({timeout: 5000}));
    }
    
})

    button.reply.defer() // faz o erro "essa interacao falhou"
    
    
}
