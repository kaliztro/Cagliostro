const Discord = require("discord.js"); 
const { token } = require("./heroku")
const coisa = require('./config.json')

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

  if (message.guild)

  database.ref(`Servidor/${message.guild.id}/Prefix`)
  .once('value').then(async function (snap) {
    
    if (snap.val() == null) { 
      database.ref(`Servidor/${message.guild.id}/Prefix`)
          .set({
              Prefix: `!`,
              nome: `${message.guild.name}`
      })
    };

    let prefix = snap.val().Prefix
  
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;

    //if (!message.member) message.member = await message.guild.fetchMember(message); //isso impede o comando apagarDM

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();
    
    if (cmd.length === 0) return;
    
    let command = client.commands.get(cmd); 

    if (!command) command = client.commands.get(client.aliases.get(cmd)); 

    if (command) 
        command.run(client, message, args, database, firebase, prefix);

    if (!command) message.reply(`o comando "**${message.content}**" nao existe. Digite **${prefix}ajuda** para ver a lista de comandos 😉 `);
    
    });

    else

  if (!message.guild) {

  if (message.author.bot) return;
  if (!message.content.startsWith(coisa.prefix)) return;

  const args = message.content.slice(coisa.prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();
    
    if (cmd.length === 0) return;
    
    let command = client.commands.get(cmd); 

    if (!command) command = client.commands.get(client.aliases.get(cmd)); 

    if (command) 
        command.run(client, message, args, database, firebase);

    if (!command) message.reply(`o comando "**${message.content}**" nao existe. Digite **${coisa.prefix}ajuda** para ver a lista de comandos 😉 `);
  }
})