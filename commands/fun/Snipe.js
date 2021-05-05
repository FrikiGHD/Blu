const Discord = require('discord.js');

module.exports = {
    name: 'snipe',
    description: 'Recupera un mensaje eliminado',

    async run(client, message, args) {
        const msg = client.snipes.get(message.channel.id);
        if (!msg) return message.channel.send(`No hay ningún mensaje eliminado`);

        const snipeEmbed = new Discord.MessageEmbed()
            .setAuthor(msg.author.tag, msg.author.displayAvatarURL())
            .setDescription(msg.content)
            .setColor(0xB1472F)
            .setTimestamp();

        message.channel.send(snipeEmbed);
    },
};