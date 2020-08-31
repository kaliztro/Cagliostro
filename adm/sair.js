const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {

if (message.member.user.id == '459559578648969227' ) {
}else{ return message.reply('somente o dono do Bot pode executar esse comando.') }

const servidor = args.join(" ") 
const guild = client.guilds.cache.get(servidor);

client.guilds.cache.get(servidor).leave() 
message.channel.send(`eu sai do servidor: **${guild.name}** ID: **${servidor}**`);

};

exports.help ={
    name:'sair',
    category: 'Dono',
    description: 'sai do servidor selecionado.',
    usage: 'sair ID do servidor',
    admin: true
  }