// icone de online no discord e mensagem de online no log
module.exports = async (client) => { 
    client.user
        .setStatus("online") // idle, dnd, online, invisible
        .catch(console.error);
        console.log(`Eu estou online agora, meu nome é ${client.user.username}. Há ${client.users.cache.size} usuario(s) em ${client.guilds.cache.size} servidor(es)!`);
      
        
//fica pingando um site 
/*
const fetch = require('node-fetch');
setInterval(function() {
fetch('https://lucy.guilhermemagal3.repl.co');
}, 1000 * 60 * 1); //tempo definido para 1 minuto
*/


  };