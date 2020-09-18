const Discord = require("discord.js"); 
const client = new Discord.Client(); 
const config = require("./config.json"); 
const { readdirSync } = require('fs')
const Enmap = require('enmap')
const { TOKEN } = require("./local.json")

client.commands = new Enmap()

// timer para o bot ser reiniciado na discloud (envia pra mim (kaliztro) no privado)
client.on('ready', () => {
  var content = "Preciso ser reiniciado"; //mensagem do timer
  var iniciar = "Estou pronto e operante!"; //mensagem quando o bot é iniciado
  var user = client.users.cache.get('459559578648969227'); // Id do Usuario
  setInterval(function() {
    user.send(content); // Aqui enviamos após o tempo definido abaixo passar
  }, 1000 * 60 * 60 * 120); // Tempo definido como 6 dias
  user.send(iniciar).then(msg => msg.delete({timeout: 50000}));//envia a mensagem quando o bot inicia
});

// configuraçao da pasta comandos 
client.on("message", message => {
     if (message.author.bot) return;
     if (message.channel.type == "dm") return;
     if (!message.content.toLowerCase().startsWith(config.prefix)) return;
     if (message.content.startsWith(`<@!${client.user.id}>`) || message.content.startsWith(`<@${client.user.id}>`)) return;

    const args = message.content
        .trim().slice(config.prefix.length)
        .split(/ +/g);
    const command = args.shift().toLowerCase();

    try {
        const commandFile = require(`./comandos/${command}.js`)
        commandFile.run(client, message, args);
    } catch (err) {
    console.error("Erro:" + err);
    client.channels.cache.get('732668425108979774').send("```js\n" + err + "```");
    message.reply(`Esse comando não existe. utilize **${config.prefix}ajuda** para ver a lista de comandos. `)
  }
});

// configuraçao da pasta commands de ADM
client.on("message", message => {
  if (message.author.bot) return;
 // if (message.channel.type == "dm") return; //n deixa enviar mensagens pv pro bot
  if (!message.content.toLowerCase().startsWith(config.prefixADM)) return;
  if (message.content.startsWith(`<@!${client.user.id}>`) || message.content.startsWith(`<@${client.user.id}>`)) return;

  const args = message.content
    .trim().slice(config.prefixADM.length)
    .split(/ +/g);
  const command = args.shift().toLowerCase();
  
  try {
    const commandFile = require(`./adm/${command}.js`)
  
    commandFile.run(client, message, args);
  } catch (err) {
    console.error("Erro:" + err);
    client.channels.cache.get('732668425108979774').send("```js\n" + err + "```");
    message.reply(`Esse comando não existe. utilize **${config.prefix}ajuda** para ver a lista de comandos. `)
  }
});

//carregando pasta events
const evtFiles = readdirSync('./events/')
console.log('log', `Carregando o total de ${evtFiles.length} eventos`)
evtFiles.forEach(f => {
  const eventName = f.split('.')[0]
  const event = require(`./events/${f}`)

  client.on(eventName, event.bind(null, client))
});

// mostra no log q leu a pasta adm

const admFiles = readdirSync('./adm/')
console.log('log', `Carregando o total de ${admFiles.length} comandos administrativos.`);

// mostra no log q leu a pasta comandos

const cmdFiles = readdirSync('./comandos/')
console.log('log', `Carregando o total de ${cmdFiles.length} comandos administrativos.`);

//mostra em um canal determinado as mensagens enviada no DM
client.on("message",(msg)=>{
  if(msg.channel.type == "dm"){
  if (msg.author.bot) return;
  if (msg.content.startsWith(config.prefix)) return;
  if (msg.content.startsWith(config.prefixADM)) return;
    client.channels.cache.get('740355595563171851').send(`${msg.author.username}: ${msg.content}`);
  }
});


client.login(TOKEN); 
