const Discord = require("discord.js"); 
const { token } = require("./heroku")

//database
const firebase = require('firebase');
const firebaseConfig = require('./heroku')
firebase.initializeApp(firebaseConfig);
const database = firebase.database();
//

const client = new Discord.Client()

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();

client.login(token);

["command", "event"].forEach(handler => {
    require(`./handlers/${handler}`)(client);
});


client.on("message", async message => {

  database.ref(`Servidor/${message.guild.id}/Prefix`)
  .once('value').then(async function (snap) {
    
    if (snap.val() == null) { 
      database.ref(`Servidor/${message.guild.id}/Prefix`)
          .set({
              Prefix: `!`,
              nome: `${message.guild.name}`
      })
    };

    const prefix = snap.val().Prefix
  
    if (message.author.bot) return;
    if (!message.guild) return; // isso impede de enviar comandos na dm ex apagardm
    if (!message.content.startsWith(prefix)) return;

    //if (!message.member) message.member = await message.guild.fetchMember(message); //isso impede o comando apagarDM

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();
    
    if (cmd.length === 0) return;
    
    let command = client.commands.get(cmd); 

    if (!command) command = client.commands.get(client.aliases.get(cmd)); 


    if (command) 
        command.run(client, message, args, database, firebase);

    if (!command) message.reply(`o comando "**${message.content}**" nao existe. Digite !ajuda para ver a lista de comandos 😉 `);
    
    
})

})