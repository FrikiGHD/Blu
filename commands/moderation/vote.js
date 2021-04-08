const Discord = require('discord.js');

module.exports = {
    name: "vote",
    description: "Crea una votación",

    async run (bot, message, args) {
        if (!message.member.roles.cache.has('814171986598690857')) return message.channel.send("No puedes usar este comando （︶^︶）");
        const filter = m => m.author.id == message.author.id;
        let embedVote = new Discord.MessageEmbed()
            .setFooter(`Votación realizada por ${message.author.tag}`)
            .setTimestamp()
            .setColor("RANDOM");

        message.channel.send('Escribe el título para la votación');
        try {
            let msg = await message.channel.awaitMessages(filter, { max: 1, time: 15000, errors: ['time'] });
            console.log(msg.first().content);
            embedVote.setTitle(msg.first().content);
        } catch (err) {
            console.log(err);
            message.channel.send('Te has quedado sin tiempo, vuelve a escribir el comando')
        }

        message.channel.send('Escribe la primera opción para la votación');
        try {
            let msg = await message.channel.awaitMessages(filter, { max: 1, time: 15000, errors: ['time'] });
            console.log(msg.first().content);
            embedVote.addField(`{🔳}`, msg.first().content);
        } catch (err) {
            console.log(err);
            message.channel.send('Te has quedado sin tiempo, vuelve a escribir el comando')
        }

        message.channel.send('Escribe la segunda opción para la votación');
        try {
            let msg = await message.channel.awaitMessages(filter, { max: 1, time: 15000, errors: ['time'] });
            console.log(msg.first().content);
            embedVote.addField(`{🔲}`, msg.first().content);
        } catch (err) {
            console.log(err);
            message.channel.send('Te has quedado sin tiempo, vuelve a escribir el comando')
        }
        message.channel.send(embedVote).then(sentMessage => sentMessage.react('🔳')).then(reaction => reaction.message.react('🔲'));
    }
}