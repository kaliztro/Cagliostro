module.exports = {
    name: "ping",
    category: "info",
    aliases: ["p"],
    description: "Mostra a latência do server e da API.",
    usage: "é so digitar o comando mesmo.",
    run: async (client, message, args) => {
        const m = await message.channel.send("Ping?");
        m.edit(
          `🏓 **| Pong!**\nLatência do Server: **${m.createdTimestamp -
            message.createdTimestamp}ms.**\nLatência da API: **${Math.round(
            client.ws.ping
          )}ms**`
        );
    }
}




