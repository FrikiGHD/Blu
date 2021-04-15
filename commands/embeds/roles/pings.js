const Discord = require('discord.js');

module.exports = {
    name: "pings",
    description: "crear roles para los pings",

    async run (bot, message, args) {

        if (!message.member.roles.cache.has('814171986598690857')) return message.channel.send("No puedes usar este comando （︶^︶）");
        const anuncios = bot.channels.cache.get('814240903316111391')

        let pings = new Discord.MessageEmbed()
        .setTitle('**PINGS**')
        .setColor('0xe18a44')
        .addField("🇪🇸 | Español", `Selecciona una reacción para obtener el rol y ser mencionado cuando se utilice en ${anuncios}`)
        .addField("🇺🇸 | English", `Select a reaction to get the role and get mentioned when it's used in \n ${anuncios}`)
        .addFields({
            name: '__Curiosidades semanales__ | ⭐',
            value: "***ES*** - Rol para ser mencionado cuando se anuncien curiosidades semanales \n ***EN*** - Role to be mentioned when there's a weekly curiosities announcement"
        },
        {
            name: '__Gamenights__ | 🕹️',
            value: `***ES*** - Rol para ser mencionado cuando se haga un anuncio de "noche de juegos" \n ***EN*** - Role to be mentioned when there's a gamenight announcement`
        })

        await message.channel.send(pings)
    }
}