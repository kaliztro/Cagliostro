// icone de online no discord e mensagem de online no log
module.exports = async (client) => { 
    client.user
        .setStatus("online") // idle, dnd, online, invisible
        .catch(console.error);
        console.log(`Eu estou online agora, meu nome é ${client.user.username}. Há ${client.users.cache.size} usuario(s) em ${client.guilds.cache.size} servidor(es)!`)
  };