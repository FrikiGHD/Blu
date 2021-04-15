const Discord = require('discord.js');

module.exports = {
    name: "roleslang",
    description: "crear roles para los idiomas",

    async run (bot, message, args) {

        if (!message.member.roles.cache.has('814171986598690857')) return message.channel.send("No puedes usar este comando （︶^︶）");
        
        let roleslang = new Discord.MessageEmbed()
        .setTitle('**IDIOMA / LANGUAGE**')
        .setColor('0xe18a44')
        .addField("🇪🇸 | Español", `Selecciona una reacción para obtener el rol según tu idioma`)
        .addField("🇺🇸 | English", `Select a reaction to get the role according to your language`)
        .addFields({
            name: '__Español__',
            value: 'Elige este si hablas español | 🇪🇸'
        },
        {
            name: '__English__',
            value: 'Choose this one if you speak english | 🇺🇸'
        })

        await message.channel.send(roleslang)
    }
}