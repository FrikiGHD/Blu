const Discord = require('discord.js');

module.exports = {
    name: "pat",
    description: "Blu mencionará a un usuario para hacerle headpat",

    async run (bot, message, args) {
        if(!args[0]) return message.reply('Tienes que mencionar a alguien primero ¬_¬')
        const mentionedMember = message.mentions.users.first().username
        message.channel.send(`*acaricia la cabeza de ${mentionedMember} (o︶ω︶)o☆`)
    }
}