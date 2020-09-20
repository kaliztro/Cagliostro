const discloud = require("discloud-status");

const Discord = require("discord.js");

module.exports = {
  name: "ram",
  category: "info",
  aliases: [],
  description: "Mostra a ram que o bot esta usando.",
  usage: "ué, é só isso mesmo.",
  run: async (client, message, args) => {


// retorna o uso/total de RAM
let r = discloud.ram();
console.log(r) // 100/1024MB
message.channel.send("uso/total de RAM " + r)
/*
// dados do uso de RAM
let ur = discloud.usoRam();
console.log(ur) // 100MB
message.channel.send("" + ur)

// dados do total de RAM disponível
let tr = discloud.totalRam();
console.log(tr) //1GB
message.channel.send("" + tr)
*/

}

}