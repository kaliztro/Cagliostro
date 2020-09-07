module.exports = (client, guild) => {

    let user = client.users.cache.get('459559578648969227')
  
    user.send("Eu acabei de entrar no servidor **"+ guild.name + "**");
  }