const Discord = require('discord.js');

module.exports = {
    name: "roles-en/es",
    description: "crear roles para los idiomas",

    async run (bot, message, args) {

        if (!message.member.roles.cache.has('814171986598690857')) return message.channel.send("No puedes usar este comando （︶^︶）");
        const roleslang = new Discord.MessageEmbed()
        .setTitle('**IDIOMA / LANGUAGE**')
        .setDescription('Selecciona una reacción para obtener el rol según tu idioma \n Select a reaction to get the role according to your language')
        .addFields({
            name: '__Español__',
            value: 'Elige este si hablas español  <:flag_es:821438218066460702>'
        },
        {
            name: '__English__',
            value: 'Choose this one if you speak english <:flag_us:821438565807947856>'
        })

        await message.channel.send(roleslang)
    }
}