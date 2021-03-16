const Discord = require('discord.js');

module.exports = {
    name: "roles",
    description: "crear roles para los canales ocultos",

    async run (bot, message, args) {
        if (!message.member.roles.cache.has('814171986598690857')) return message.channel.send("No puedes usar este comando （︶^︶）");

        const roles = new Discord.MessageEmbed()
        .setTitle('**ROLES DE CATEGORÍAS**')
        .setColor('0xe18a44')
        .setDescription('Selecciona un rol reaccionando al emoji correspondiente \n (y desbloquear los canales ocultos de cada categoría)')
        .addFields({
            name: '__Artistas__',
            value: 'Rol para los dibujantes del server | <:art:821455204116463667>'
        },
        {
            name: '__Otakus__',
            value: 'Rol para los amantes de anime | <:shinto_shrine:821455259754037308>'
        },
        {
            name: '__Gamers__',
            value: 'Rol para los gamers del servidor | <:video_game:821455221511159879>'
        })
        .setImage('https://i.imgur.com/JRfJzHY.png')
        await message.channel.send(roles)
    }
}