const Discord = require('discord.js');

module.exports = {
    name: 'work',
    cooldown: 1000*10,
    description: 'Trabaja para conseguir monedas',
    
    async run(client, message, args) {
        const job = ['talador', 'pescador'];

        const rjobs = Math.floor(Math.random() * job.length);
        const coins = Math.floor(Math.random() * 200) + 50;

        message.channel.send(`Has trabajado como ${job[rjobs]} y has conseguido ${coins} monedas`);
        client.add(message.author.id, coins);
    },
};