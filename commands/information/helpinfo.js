const pagination = require('discord.js-pagination');
const Discord = require('discord.js');

module.exports = {
    name: "helpinfo",
    description: "comando avanzado de ayuda",

    async run (bot, message, args) {

        const BotInfo = new Discord.MessageEmbed()
        .setColor(0xB95CD5)
        .setTitle('Información del bot')
        .addField('**Prefijo**', 'El prefijo del bot es: `b!`')
        .addField('**Páginas**', 'Comandos: `Información` | `Diversión` | `Moderación`')
        .addField('**Navegación**', 'Usa las flechas de abajo para navegar entre páginas ☜(⌒▽⌒)☞')

        const Information = new Discord.MessageEmbed()
        .setColor(0x3E9BC9)
        .setTitle('Información')
        .addField('`b!help`', 'Muestra el menú de ayuda básico')
        .addField('`b!helpinfo`', 'Muestra el menú de ayuda avanzado')

        const Fun = new Discord.MessageEmbed()
        .setColor(0xC78E1D)
        .setTitle('Diversión')
        .addField('`b!howsimp`', 'Muestra cuan simp eres')
        .addField('`b!ppt`', 'Sirve para jugar a piedra, papel y tijieras')
        .addField('`b!meme`', 'Muestra un meme aleatorio')

        const Moderation = new Discord.MessageEmbed()
        .setColor(0x52116F)
        .setTitle('Moderación (solo moderadores)')
        .addField('`b!kick`', 'Expulsa a un usuario | `Formato: b!kick @usuario razón`')
        .addField('`b!ban`', 'Banea a un usuario | `Formato: b!ban @usuario razón`')

        const Pages = [
            BotInfo,
            Information,
            Fun,
            Moderation,
        ]

        const emojilist = ["◀", "▶"]

        const timeout = '600000';

        pagination(message, Pages, emojilist, timeout)
    }
}