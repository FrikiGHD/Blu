const Discord = require('discord.js');

module.exports = {
    name: "roles",
    description: "crear roles para los canales ocultos",

    async run (bot, message, args) {
        if (!message.member.roles.cache.has('814171986598690857')) return message.channel.send("No puedes usar este comando （︶^︶）");

        const roles = new Discord.MessageEmbed()
        .setTitle('Roles')
        .setDescription('Selecciona un rol reaccionando al emoji correspondiente \n (y desbloquear los canales ocultos de cada categoría)')
        .addFields({
            name: 'Artistas',
            value: 'Rol para los dibujantes del server  `🎨`'
        },
        {
            name: 'Otakus',
            value: 'Rol para los amantes de anime  `⛩`'
        },
        {
            name: 'Gamers',
            value: 'Rol para los gamers del servidor `🎮`'
        })

        await message.channel.send(roles)
    }
}