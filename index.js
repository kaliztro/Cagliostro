const Discord = require("discord.js");
const client = new Discord.Client({intents: 32767});
const config = require("./config.json");

client.login(config.token);
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
client.slashCommands = new Discord.Collection();

//
["command", "events"].forEach(handler => {
    require(`./handlers/${handler}`)(client);
});

client.on("ïnteractionCreate", async(interaction) => {
    if (!interaction.isCommand()) return;

    const slashcmds = client.slashCommands.get(interaction.commandName)

    if (!slashcmds) return;

    try{
        await slashcmds.run(client, interaction)
    } catch (e) {
        console.error(e)
    }
})














//
    client.on("ready", async (client, message) => {

    console.log(`Eu estou online agora, meu nome é ${client.user.username}. Há ${client.users.cache.size} usuario(s) em ${client.guilds.cache.size} servidor!`);

    client.user.setPresence({ activities: [{ name: 'Em Manutenção', type: 'LISTENING' }], status: 'idle' });

    });
//

