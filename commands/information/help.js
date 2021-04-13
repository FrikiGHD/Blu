const Discord = require('discord.js');

module.exports = {
    name: "help",
    description: "comando básico de ayuda",

    async run (bot, message, args) {

        const help = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle('Prefijo - `b!` / Prefix - `b!`')
        .setAuthor('Lista de comandos / Command list')

        .addFields({
            name: 'Importante',
            value: 'Usa el comando `b!helpinfo` para más información'
        },
        {
            name: 'Información',
            value: '`help` | `helpinfo` | `social`',
        },
        {
            name: 'Diversión',
            value: '`snipe` | `simp` | `ppt` | `meme` | `bonk` | `cry` | `hi` | `pat`',
        },
        {
            name: 'Sistema de niveles',
            value: '`nivel` | `ranking` | `rango`',
        },
        {
            name: 'Moderación',
            value: '`ban` | `kick` | `warn` | `purge` | `mute & unmute`',
        },)

        message.channel.send(help)
    }
}