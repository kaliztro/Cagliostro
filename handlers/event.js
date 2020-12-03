  
const Discord = require("discord.js");
const { readdirSync } = require('fs')

module.exports = (client, message) => {

const evtFiles = readdirSync('./events/')
console.log('log', `Carregando o total de ${evtFiles.length} eventos`)
evtFiles.forEach(f => {
  const eventName = f.split('.')[0]
  const event = require(`../events/${f}`)

  client.on(eventName, event.bind(null, client))
});
}