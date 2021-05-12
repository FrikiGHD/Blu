const Discord = require('discord.js');
const pagination = require('discord.js-pagination');

module.exports = {
    name: 'help',
    description: 'Muestra un menú de ayuda con páginas',
    
    async run(client, message, args) {
        const BotInfo = new Discord.MessageEmbed()
            .setColor(0xB95CD5)
            .setTitle('INFORMACIÓN DEL BOT')
            .addField('**__Prefijo__**', 'El prefijo del bot es: `b!`')
            .addField('**__Páginas__**', 'Comandos: `Información` | `Diversión` | `Niveles` | `Moderación`')
            .addField('**__Navegación__**', 'Usa las flechas de abajo para navegar entre páginas ☜(⌒▽⌒)☞')
    
            const Information = new Discord.MessageEmbed()
            .setColor(0x3E9BC9)
            .setTitle('__Información__')
            .addField('`b!help`', 'Muestra el menú de ayuda')
            .addField('`b!social`', 'Muestra las redes sociales de Laraartss')
            .addField('`b!serverinfo`', 'Muestra información del servidor')
            .addField('`b!userinfo`', 'Muestra información del usuario')
    
            const Fun = new Discord.MessageEmbed()
            .setColor(0xC78E1D)
            .setTitle('__Diversión__')
            .addField('`b!simp`', 'Muestra cuan simp eres')
            .addField('`b!rps`', 'Sirve para jugar a piedra, papel y tijieras')
            .addField('`b!snipe`', 'Recupera un mensaje eliminado recientemente')
            .addField('`b!meme`', 'Muestra un meme aleatorio')
            .addField('\u200B', '\u200B')
            .addField('Diversión', '(*Reacciones*)')
            .addField('`b!cry`', 'Úsalo cuando quieras llorar y Blu lo hará por tí இ௰இ')
    
            const Level = new Discord.MessageEmbed()
            .setColor(0xC78E1D)
            .setTitle('__Niveles__')
            .addField('`b!lvl`', 'Muestra tu nivel o el de un usuario')
            .addField('`b!ranking`', 'Muestra una lista con el top 10 de usuarios por niveles')
            .addField('`b!rank`', 'Muestra una targeta con tu rango y nivel')
    
            const Moderation = new Discord.MessageEmbed()
            .setColor(0x52116F)
            .setTitle('__Moderación__ (solo moderadores)')
            .addField('`b!kick`', 'Expulsa a un usuario | [Formato: b!kick @usuario razón]')
            .addField('`b!ban`', 'Banea a un usuario | [Formato: b!ban @usuario razón]')
            .addField('`b!purge`', 'Elimina un número de mensajes de un canal | \n [Formato: b!purge (número entero del 2-100)]')
            .addField('`b!mute & b!unmute`', 'Mutea y desmutea a un usuario | [Formato: b!mute @usuario razón]')
            .addField('`b!say`', 'Blu dirá lo que escribas por tí (puedes mencionar canales)')
    
            const Pages = [
                BotInfo,
                Information,
                Fun,
                Level,
                Moderation,
            ]
    
            const emojilist = ["◀", "▶"]
    
            const timeout = '600000';
    
            pagination(message, Pages, emojilist, timeout)
        },
};