const Discord = require("discord.js");
  
module.exports.run = async (client, message, args) => {
  const m = await message.channel.send("Ping?");
  m.edit(
    `🏓 **| Pong!**\nLatência do Server: **${m.createdTimestamp -
      message.createdTimestamp}ms.**\nLatência da API: **${Math.round(
      client.ws.ping
    )}ms**`
  );
};

exports.help ={
  name:'ping',
  category: 'Info',
  description: 'Mostra o ping do BOT.',
  usage: 'ping',
}