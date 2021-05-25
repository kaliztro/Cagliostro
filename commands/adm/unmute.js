const Discord = require('discord.js');
const config = require("../../config.json");
const p = require("../../index")


        module.exports = {
            name: "unmute",
            category: "adm",
            aliases: ["desmutar"],
            description: "desmuta.",
            usage: `${p.prefix}unmute @usuario`,
            run: async (client, message, args, database, member) => {

                message.delete()

                if(!message.member.hasPermission("MUTE_MEMBERS"))return message.channel.send("Prece que vc não tem mana suficiente para isso.")

                let user = message.mentions.members.first()
                if(!user) return message.channel.send("Vc precisa mencionar alguem. Tu sabe deisso né?")

                database.ref(`Servidor/Mutado/${message.guild.id}`)
                 .once('value').then(async function (snap) {

                if (snap.val() == null) return;
          
                  let role = snap.val().CargoID

                  user.roles.remove(role)

                  message.channel.send("Usuario desmutado com sucesso")
                 })

                 }
                }