const Discord = require('discord.js');

module.exports = {
    name: "hi",
    description: "Blu mencionará a un usuario para saludarlo",

    async run (bot, message, args) {
        if(!args[0]) return message.reply('Tienes que mencionar a alguien primero ¬_¬')
        const mentionedMember = message.mentions.users.first().username
        let replies = [`Hola ${mentionedMember} ヾ(￣▽￣)`, `Saludos ${mentionedMember} UwU`, `¿Qué tal ${mentionedMember}? ヾ(•ω•)o`]
        let salutes = Math.floor((Math.random() * replies.length));

        let hola = new Discord.MessageEmbed()
        .setColor("0x1d79c4")
        .setDescription(replies[salutes])
        
        message.channel.send(hola)
    }
}