const Discord = require('discord.js');
const randomPuppy = require('random-puppy');

module.exports = {
    name: 'meme',
    description: 'Muestra memes de subreddits',

    async run(client, message, args) {
        const subReddits = ["dankmeme", "meme", "memes"]
        const random = subReddits[Math.floor(Math.random() * subReddits.length)]
    
        const img = await randomPuppy(random)
    
        const embed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setImage(img)
        .setTitle(`Mira este meme ヾ(≧▽≦*)o`)
        .setURL(`https://reddit.com/r/${random}`)
    
        message.channel.send(embed)
    },
};