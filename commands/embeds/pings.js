const Discord = require('discord.js');

module.exports = {
    name: "pings",
    description: "crear roles para los pings",

    async run (bot, message, args) {

        if (!message.member.roles.cache.has('814171986598690857')) return message.channel.send("No puedes usar este comando （︶^︶）");
        const roleslang = new Discord.MessageEmbed()
        .setTitle('**PINGS**')
        .setColor('0x080606')
        .addField("<:flag_es:821438218066460702> | Español", "Selecciona una reacción para obtener el rol para ser mencionado cuando se utilice para anuncios")
        .addField("<:flag_us:821438565807947856> | English", "Select a reaction to get the role for being mentiones when it's used in announcments")
        .addFields({
            name: '__Curiosidades semanales__ | <:star:822191787040047145>',
            value: "Rol para ser mencionado cuando se haga un anuncio de curiosidades semanales \n Role to be mentioned when there's an announcement of weekly curiosities"
        },
        {
            name: '__Gamenights__ | <:joystick:822191135694651412>',
            value: "Rol para ser mencionado cuando se haga un anuncio de noche de juegos \n Role to be mentioned when there's an announcement of gamenight"
        })

        await message.channel.send(roleslang)
    }
}