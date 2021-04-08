const Discord = require('discord.js');

module.exports = {
    name: "roles",
    description: "crear roles para los canales ocultos",

    async run (bot, message, args) {
        if (!message.member.roles.cache.has('814171986598690857')) return message.channel.send("No puedes usar este comando （︶^︶）");
        
        const roles = new Discord.MessageEmbed()
        .setColor('0xe18a44')
        .setImage('https://i.imgur.com/dlQj4k2.png')
        await message.channel.send(roles)
    }
}