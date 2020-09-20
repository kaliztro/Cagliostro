const { readdirSync } = require("fs");

const ascii = require("ascii-table");
const e = require("express");
const { Message } = require("discord.js");

//Cria uma nova tabela Ascii
let table = new ascii("Comandos");
table.setHeading("Comando", "Load status");

module.exports = (client, message) => {
    // Le cada subpasta de comandos
    readdirSync("./commands/").forEach(dir => {
        // Filtra para termos apenas arquivos de comando .js
        const commands = readdirSync(`./commands/${dir}/`).filter(file => file.endsWith(".js"));
    
        // Faça um loop nos comandos e adicione todos eles a uma coleção
        // Se nenhum nome for encontrado, evite que ele retorne um erro,
        // Usando uma cruz na tabela que fizemos.
        for (let file of commands) {
            let pull = require(`../commands/${dir}/${file}`);
    
            if (pull.name) {
                client.commands.set(pull.name, pull);
                table.addRow(file, '✅');
            } else {
                table.addRow(file, `❌  -> missing a help.name, or help.name is not a string.`);
                continue;
            }
    
            // Se houver uma chave de aliases, leia os aliases.
            if (pull.aliases && Array.isArray(pull.aliases)) pull.aliases.forEach(alias => client.aliases.set(alias, pull.name)); 
           
        
            
        }
    });
    // Log the table
    console.log(table.toString());
}