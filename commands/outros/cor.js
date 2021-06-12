const Discord = require("discord.js");
const config = require("../../config.json");
const p = require("../../index")

module.exports = {
    name: "cor",
    category: "outros",
    aliases: ["mudarcor"],
    description: "Muda a sua cor.",
    usage: `cor e o nome da cor`,
    run: async (client, message, args) => {

        const guild = client.guilds.cache.get("545386837846523905");
        if (guild != message.guild) return message.channel.send("Esse comando não esta disponivel nesse servidor. 😭")

    const coresEmbed = new Discord.MessageEmbed()
    .setTitle('Cores disponiveis')
    .setDescription(`*ciano\n*laranja\n*verde\n*preto\n*branco\n*rosa\n*roxo\n*amarelo\n*azul\n*marrom \n\n Para remover digite ${p.prefix}cor remover`)
    .setColor(config.cor)

    var string = args.join(" ");
    var colors = [
        {name:"ciano", id:"739360066162917457"},
        {name:"laranja", id:"739364270135050331"},
        {name:"verde", id:"739364714399662151"},
        {name:"preto", id:"739364437089058837"},
        {name:"branco", id:"739364500406272061"},
        {name:"rosa", id:"739364363869093950"},
        {name:"roxo", id:"739364393141272616"},
        {name:"amarelo", id:"739364749224968264"},
        {name:"azul", id:"739364868976803911"},
        {name:"vermelho", id:"739364872474591242"},
        {name:"marrom", id:"739365027525558312"},
    ];
    var names = colors.map(function(item) {
        return item["name"].toLowerCase();
    });
    var ids = colors.map(function(item) {
        return item["id"];
    });
    var role = message.guild.roles.cache.find(r => r.name.toLowerCase() === string.toLowerCase());

    if (!args[0]) {
        return message.channel.send(`${message.author} escreva o nome da cor após o comando.\n **EX:** !cor ciano`, coresEmbed)
    } else if (args[0].toLowerCase() === 'remover') {
        await message.member.roles.remove(ids);
        return await message.channel.send(`${message.author} suas cores foram resetadas ao padrão`);
    } else if (!names.includes(string.toLowerCase()) || !role) {
        return message.channel.send(`${message.author} não existe a cor com o nome ${string} neste servidor Discord.`)
    } else {
        try {
            await message.member.roles.remove(ids);
            await message.member.roles.add(role);
            return await message.channel.send(`${message.author} agora sua cor é ${string}`);
        } catch (err) {
            console.log("erro: " + err)
            }
        
        }
    }
}

