const Discord = require("discord.js")
const p = require("../../index")

module.exports = {
  name: "dado",
  category: "outros",
  aliases: ["jogardado"],
  description: "joga o dado. 🎲",
  usage: `dado`,
  run: async (client, message, args) => {

  var array1 = ["1", "2", "3", "4", "5", "6"];

  var rand = Math.floor(Math.random() * array1.length);
    if (args[0] == array1[rand]);
  
else if (args[0] != array1[rand]) {
    message.channel.send("Deu 🎲**" + array1[rand] + "**" );
  } 

  }
};
