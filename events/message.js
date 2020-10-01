const config = require("../config.json")

module.exports = async (client, message) => {

    const emoj = client.guilds.cache.get("545386837846523905");
    const emoji = emoj.emojis.cache.find(emoji => emoji.name === "cagliostro");



    const menção = message.mentions.users.first()
    if(menção){
    if(menção.id === `${client.user.id}`) return message.channel.send(`${emoji}   Olá ${message.member.user}! Meu prefixo é:  **${config.prefix}**   Para mais informações utilize: **${config.prefix}ajuda**`)
    };



};