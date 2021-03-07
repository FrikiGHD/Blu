const Discord = require('discord.js');

module.exports = {
    name: "snipe",
    description: "Este comando recupera los mensajes eliminados recientemente por los usuarios",

    async run (bot, message, args) {

        const msg = bot.snipes.get(message.channel.id)
        const snipe = new Discord.MessageEmbed()
        .setAuthor(msg.member.user.tag, msg.member.user.displayAvatarURL())
        .setDescription(msg.content)
        .setTimestamp();

        await message.channel.send(snipe)
    }
}