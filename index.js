const Discord = require("discord.js"); 
const { prefix } = require("./config.json")
const { token } = require("./local.json")
const { readdirSync } = require('fs')

const client = new Discord.Client({
    disableEveryone: true
})

// Collections
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();


// Run the command loader
["command"].forEach(handler => {
    require(`./handlers/${handler}`)(client);
});

client.on("message", async message => {
   

    if (message.author.bot) return;
    //if (!message.guild) return; // isso impede de enviar comandos na dm ex apagardm
    if (!message.content.startsWith(prefix)) return;

    // Se message.member não estiver armazenado em cache, armazene-o em cache.
    //if (!message.member) message.member = await message.guild.fetchMember(message); //isso impede o comando apagarDM

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();
    
    if (cmd.length === 0) return;
    
    // Obtenha o comando
    let command = client.commands.get(cmd); 
    // Se nenhum for encontrado, tente encontrá-lo pelo alias
    if (!command) command = client.commands.get(client.aliases.get(cmd)); 


    // Se um comando for finalmente encontrado, execute o comando
    if (command) 
        command.run(client, message, args);

    if (!command) message.reply(`o comando "**${message.content}**" nao existe. Digite !ajuda para ver a lista de comandos 😉 `);

});

//carregando pasta events
const evtFiles = readdirSync('./events/')
console.log('log', `Carregando o total de ${evtFiles.length} eventos`)
evtFiles.forEach(f => {
  const eventName = f.split('.')[0]
  const event = require(`./events/${f}`)

  client.on(eventName, event.bind(null, client))
});

//mostra em um canal determinado as mensagens enviada no DM

client.on("message",(msg)=>{
    if(msg.channel.type == "dm"){
    if (msg.author.bot) return;
    if (msg.content.startsWith(prefix)) return;
      client.channels.cache.get('740355595563171851').send(`${msg.author.username}: 🗣️ ${msg.content}`);
    }
  });

client.login(token);