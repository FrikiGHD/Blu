const randomPuppy = require('random-puppy');
const Discord = require('discord.js');

module.exports = {
    name: "meme",
    description: "ver memes generados aleatoriamente de reddit",

    async run (bot, message, args) {
        const subReddits = ["dankmeme", "meme", "memes"]
        const random = subReddits[Math.floor(Math.random() * subReddits.length)]

        const img = await randomPuppy(random)

        const embed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setImage(img)
        .setTitle(`Mira este meme ヾ(≧▽≦*)o`)
        .setURL(`https://reddit.com/r/${random}`)

        message.channel.send(embed)
    }
}