const discloud = require("discloud-status");
const config = require("../../config.json")
const Discord = require("discord.js");

const p = require("../../index")

module.exports = {
  name: "ram",
  category: "info",
  aliases: [],
  description: "Mostra a ram que o bot esta usando.",
  usage: `ram`,
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