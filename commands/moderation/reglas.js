const Discord = require('discord.js');

module.exports = {
    name: "reglas",
    description: "crear reglas para obtener el rol de miembro",

    async run (bot, message, args) {

        if (!message.member.roles.cache.has('814171986598690857')) return message.channel.send("No puedes usar este comando （︶^︶）");

        const reglas = new Discord.MessageEmbed()
        .setTitle('**REGLAS DEL SERVIDOR**')
        .setColor('0xE97E1F')
        .setDescription('Porfavor lee las reglas. El hecho de que no respetes las normas puede hacer que te ganes un aviso (cuando hayas llegado a los tres avisos graves, serás expulsado si los administradores lo ven necesario)')
        .addFields(
            {name: '__Regla 1__', value: 'No insultar a otros miembros, debes respetar a los demás y sus opiniones.'},
            {name: '__Regla 2__', value: 'No compartas contenido inapropiado, este no es un sitio para hacer eso.'},
            {name: '__Regla 3__', value: 'Usa los canales apropiadamente, cada uno tiene su función.'},
            {name: '__Regla 4__', value: 'Haz caso a los administradores / moderadores.'},
            {name: '__Regla 5__', value: 'No sofoques los bots o las menciones, es molesto.'},
            {name: '__Regla 6__', value: 'No hagas spam sobre apps, sitios, etc.'},
            {name: '__Regla 7__', value: 'Y sobretodo, pásatelo bien ;3 \n \n Reacciona con ✅ para desbloquear los canales (si no funciona, escríbele a un moderador)'},)
        .setImage('https://i.imgur.com/AsYzwic.png')

        await message.channel.send(reglas)
    }
}