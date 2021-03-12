const config = require("../config.json")
const firebase = require('firebase');
const database = firebase.database();

module.exports = async (client, message) => {

  setInterval(() => { 

    database.ref(`DONO`)
  .once('value').then(async function (snap) {

    if (snap.val() == null) return;
          
    const status = snap.val().Status
  
  client.user.setPresence({ activity: { name: ` ${status}`, type: 'LISTENING' }, status: 'online' })
  })

}, 15 * 1000)

console.log(`Eu estou online agora, meu nome é ${client.user.username}. Há ${client.users.cache.size} usuario(s) em ${client.guilds.cache.size} servidor(es)!`)
  
  // timer para o bot ser reiniciado na discloud
  
  var content = "Preciso ser reiniciado"; //mensagem do timer
  var iniciar = "Estou pronto e operante!"; //mensagem quando o bot é iniciado
  var user = client.users.cache.get('459559578648969227'); // Id do Usuario
  setInterval(function() {
    user.send(content); // Aqui enviamos após o tempo definido abaixo passar
  }, 1000 * 60 * 60 * 120); // Tempo definido como 6 dias
  user.send(iniciar).then(msg => msg.delete({timeout: 50000}));//envia a mensagem quando o bot inicia


//fica pingando um site 
/*
const fetch = require('node-fetch');
setInterval(function() {
fetch('SITE PARA SER PINGADO');
}, 1000 * 60 * 1); //tempo definido para 1 minuto
*/


const express = require('express');
const app = express();
app.get("/", (request, response) => {
  const ping = new Date();
  ping.setHours(ping.getHours() - 3);
  console.log(`Ping recebido às ${ping.getUTCHours()}:${ping.getUTCMinutes()}:${ping.getUTCSeconds()}`);
  response.sendStatus(200);
});
app.listen(process.env.PORT);


  };
