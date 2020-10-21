const { readdirSync } = require("fs");

const ascii = require("ascii-table");
const e = require("express");
const { Message } = require("discord.js");

let table = new ascii("Comandos");
table.setHeading("Comando", "Load status");

module.exports = (client, message) => {
    // Le cada subpasta de comandos
    readdirSync("./commands/").forEach(dir => {
        // Filtra para termos apenas arquivos de comando .js
        const commands = readdirSync(`./commands/${dir}/`).filter(file => file.endsWith(".js"));
    
    
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

    console.log(table.toString());
}