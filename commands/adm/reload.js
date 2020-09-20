const Discord = require("discord.js")

module.exports = {
    name: "reload",
    category: "adm",
    aliases: ["recarregar"],
    description: "Recarrega um comando.",
    usage: "reload e o nomde do comando",
    run: async (client, message, args) => {

    if (!message.member.permissions.has("ADMINISTRATOR"))
    return message.reply(
      "você é fraco, lhe falta permissão para usar esse comando"
    );

    if(!args[0]) return message.channel.send("Forneça um comando para recarregar!")

    let commandName = args[0].toLowerCase()

    try {
        delete require.cache[require.resolve(`./${commandName}.js`)] // usage !reload <name>
        client.commands.delete(commandName)
        const pull = require(`./${commandName}.js`)
        client.commands.set(commandName, pull)
    } catch(e) {
        return message.channel.send(`Não foi possível recarregar: \`${args[0].toUpperCase()}\``)
    }

    message.channel.send(`o comando \`${args[0].toUpperCase()}\` foi recarregado!`)

    }
}


