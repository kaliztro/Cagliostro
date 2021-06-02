const Discord = require("discord.js");
const p = require("../../index")

module.exports = {
  name: "senha",
  category: "outros",
  aliases: [""],
  usage: `${p.prefix}emoji e o nome do emoji.`,
  description: "Envia o emoji escolhido no chat.",
  run: async (client, message, args) => {
    message.react("✅");

    function gerarPassword() {
    return Math.random().toString(36).slice(-8);
}

var testes = Array.apply(null, Array(10)).map(gerarPassword);

message.author.send(`Aqui está uma lista com 10 senhas diferentes. escolha a que achar melhor. \n\n` + JSON.stringify(testes));

}

}
    