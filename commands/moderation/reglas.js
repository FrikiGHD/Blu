const Discord = require('discord.js');

module.exports = {
    name: "reglas",
    description: "crear reglas para obtener el rol de miembro",

    async run (bot, message, args) {

        if (!member.roles.cache.some(role => role.name === 'MODERADOR')) return message.channel.send("No puedes usar este comando （︶^︶）");

        const reglas = new Discord.MessageEmbed()
        .setTitle('**REGLAS DE DRAGÓN BLANCO DRAGÓN NEGRO**')
        .setColor('0xE97E1F')
        .addFields(
            {name: '**Regla nº1**', value: 'No insultar a otros miembros, debes respetar a los demás y sus opiniones.'},
            {name: '**Regla nº2**', value: 'No compartas contenido inapropiado, este no es un sitio para hacer eso.'},
            {name: '**Regla nº3**', value: 'Usa los canales apropiadamente, cada uno tiene su función.'},
            {name: '**Regla nº4**', value: 'Haz caso a los administradores / moderadores.'},
            {name: '**Regla nº5**', value: 'No sofoques los bots o las menciones, es molesto.'},
            {name: '**Regla nº6**', value: 'No hagas spam sobre apps, sitios, etc.'},
            {name: '**Regla nº7**', value: 'Y sobretodo, pásatelo bien ;3'},
            {name: 'Que no respetes las normas puede hacer que te ganes un aviso (cuando hayas llegado a los tres avisos graves, serás expulsado si los administradores lo ven necesario)', 
            value: 'Reacciona con ✅ para desbloquear los canales (si no funciona, escríbele a un moderador)'})
        .setImage('https://i.imgur.com/AsYzwic.png')

        await message.channel.send(reglas)
    }
}