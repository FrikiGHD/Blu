const Discord = require('discord.js');

module.exports = {
    name: "cry",
    description: "Blu mencionará al usuario seleccionado para llorar",

    async run (bot, message, args) {
        let member = message.mentions.users.first() || message.author
        message.channel.send(`${member} se ha puesto a llorar 〒▽〒`)
        let cry = new Discord.MessageEmbed()
        .setColor(0x3D8DBF)
        .setImage(`https://i.imgur.com/OGlb4kr.png`)
        
        message.channel.send(cry)
    }
}