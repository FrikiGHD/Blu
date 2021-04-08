const Discord = require('discord.js');

module.exports = {
    name: "bonk",
    description: "Blu mencionará a un usuario para hacerle *bonk",

    async run (bot, message, args) {
        if(!args[0]) return message.reply('Tienes que mencionar a alguien primero ¬_¬')
        const mentionedMember = message.mentions.users.first().username
        message.channel.send(`*le hace bonk a ${mentionedMember} o(一︿一+)o`)
    }
}