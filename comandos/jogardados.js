const Discord = require("discord.js")

exports.run = async (client, message, args) => {
  var array1 = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];

  var rand = Math.floor(Math.random() * array1.length);
    if (args[0] == array1[rand]);
  
else if (args[0] != array1[rand]) {
    message.channel.send("Deu 🎲🎲**" + array1[rand] + "**" );
  } 

};

exports.help ={
  name:'jogardados',
  category: 'Diversão',
  description: 'joga os dados. 🎲🎲',
  usage: 'jogardados',
}  