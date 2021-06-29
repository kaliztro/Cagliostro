const Discord = require('discord.js');
const config = require("../../config.json");
const p = require("../../index")

module.exports = {
        name: "removercargo",
        category: "adm",
        aliases: ["recargo"],
        description: "Remove um cargo do membro mencionado.",
        usage: `cargo @membro @cargo`,
        run: async (client, message, args) => {

        message.delete()

        var membro = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        if(!membro) return message.reply('Você não mencionou ninguém.');

        var cargo = message.mentions.roles.first() || message.guild.roles.cache.get(args[0]);
        if(!cargo) return message.reply('Você não mencionou nenhum cargo. \n não sou adivinho.');

        if(!message.member.hasPermission("MANAGE_ROLES")) return message.reply('Parece que vc não tem permissão para isso, porfavor peça ajuda de um adulto.');

        membro.roles.remove(cargo)

        message.channel.send(`**${message.author.username}** removeu o cargo ${cargo} de ${membro}.`)
         
                 
        }
}

    
