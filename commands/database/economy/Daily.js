const Discord = require('discord.js');

module.exports = {
    name: 'daily',
    cooldown: 1000*60*60*24,
    description: 'Reclama la recompensa diaria',
    
    async run(client, message, args) {
        const coins = Math.floor(Math.random() * 2000) + 750;

        message.channel.send(`¡Has recibido ${coins} monedas! Usa el comando mañana para la recompensa diaria.`);
        client.add(message.author.id, coins)
    },
};