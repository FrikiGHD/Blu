const Discord = require('discord.js');

module.exports = {
    name: "info",
    description: "crear un embed de información",

    async run (bot, message, args) {

        if (!message.member.roles.cache.has('814171986598690857')) return message.channel.send("No puedes usar este comando （︶^︶）");

        const info = new Discord.MessageEmbed()
        .setAuthor('Laraartss', '')
        .setTitle('**INFORMACIÓN DE DBDN**')
        .setColor('0xA2AAB3')
        .setDescription('')
        .addField('__Sinopsis__', '')

        await message.channel.send(info)
    }
}