module.exports = (bot, message) => {
    bot.on("messageDelete", async (message) => {
        bot.snipes.set(message.channel.id, {
            content: message.content,
            author: message.author.id,
            member: message.member,
            image: message.attachments.first() ? message.attachments.first().proxyURL : null
        })
    })
}