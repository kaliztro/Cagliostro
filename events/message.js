module.exports = async (client, message) => {

//bot envia uma mensagem quando mencionado

const menção = message.mentions.users.first()
if(menção){
if(menção.id === `${client.user.id}`) return message.channel.send(`Meu prefixo é:  **${config.prefix}**   Para mais informações utilize: **${config.prefix}ajuda**`)
};



};