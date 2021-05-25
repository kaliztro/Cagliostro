module.exports = {
    name: "t",
    aliases: ["teste"],
    run: async (client, message, args) => {

        var p = require("../../index")

        message.channel.send(p.prefix)

    }
}