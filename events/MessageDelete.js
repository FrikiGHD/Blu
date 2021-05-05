module.exports = (client, message) => {
    client.on("messageDelete", async (message) => {
        client.snipes.set(message.channel.id, {
            content: message.content,
            author: message.author
        });
    })
};