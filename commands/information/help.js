const Discord = require('discord.js');

module.exports = {
    name: "help",
    description: "comando básico de ayuda",

    async run (bot, message, args) {

        const help = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle('Prefijo - `b!`')
        .setAuthor('Lista de comandos')

        .addFields({
            name: 'Importante',
            value: 'Usa el comando `b!helpinfo` para más información'
        },
        {
            name: 'Información',
            value: '`help` | `helpinfo`',
        },
        {
            name: 'Diversión',
            value: '`howsimp` | `ppt` | `meme`',
        },
        {
            name: 'Moderación',
            value: '`ban` | `kick`',
        },)

        message.channel.send(help)
    }
}