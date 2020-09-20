//Anti spam
const config = require("../config.json");
const usersMap = new Map();
const LIMIT = 6;
const TIME = 7000;
const DIFF = 3000;

module.exports = async (client, message) => {


  if(message.author.bot) return;
  if(usersMap.has(message.author.id)) {
    const userData = usersMap.get(message.author.id);
    const { lastMessage, timer } = userData;
    const difference = message.createdTimestamp - lastMessage.createdTimestamp;
    let msgCount = userData.msgCount;
    if(difference > DIFF) {
      clearTimeout(timer);
      //console.log('Cleared timeout');
      userData.msgCount = 1;
      userData.lastMessage = message;
      userData.timer = setTimeout(() => {
        usersMap.delete(message.author.id);
       // console.log('Removed from RESET.');
      }, TIME);
      usersMap.set(message.author.id, userData);
    }
    else {
      ++msgCount;
      if(parseInt(msgCount) === LIMIT) {
        const role = message.guild.roles.cache.get('735009272928272424');
        message.member.roles.add(role);
        message.channel.send('   :face_with_symbols_over_mouth: Você foi mutado por spam. :shushing_face:');
        setTimeout(() => {
          message.member.roles.remove(role);
          message.channel.send('Você foi desmutado, comporte-se.');
        }, TIME);
      } else {
        userData.msgCount = msgCount;
        usersMap.set(message.author.id, userData);
      }
    }
  }
  else {
    let fn = setTimeout(() => {
      usersMap.delete(message.author.id);
      //console.log('Removed from map.');
    }, TIME);
    usersMap.set(message.author.id, {
      msgCount: 1,
      lastMessage: message,
      timer: fn
    });
  };

//bot envia uma mensagem quando mencionado

const menção = message.mentions.users.first()
if(menção){
if(menção.id === `${client.user.id}`) return message.channel.send(`Meu prefixo é:  **${config.prefix}**   Para mais informações utilize: **${config.prefix}ajuda**`)
};



};