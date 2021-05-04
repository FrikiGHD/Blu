const Discord = require('discord.js');

module.exports = {
    name: 'money',
    description: 'Muestra el dinero del usuario',
    
    async run(client, message, args) {
        const wal = await client.bal(message.author.id);
        
        if(wal < 0) {
            message.channel.send(`${message.author}, tienes ${wal} monedas.\n ¡Estás en deuda! (っ °Д °;)っ`);
        } else {
            message.channel.send(`${message.author}, tienes ${wal} monedas.`)
        }
    },
};