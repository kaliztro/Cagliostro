const discloud = require("discloud-status");

const Discord = require("discord.js");


exports.run = async (client, message, args) => {
  if (!message.member.permissions.has("MANAGE_MESSAGES"))
  return message.reply(
    "você é fraco, lhe falta permissão para usar esse comando"
  );
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


exports.help ={
    name:'ram',
    category: 'Moderação',
    description: 'Mostra a ram que o bot esta usando.',
    usage: 'ram',
    admin: true
  }