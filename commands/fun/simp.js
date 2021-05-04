const Discord = require('discord.js');

module.exports = {
    name: 'simp',
    description: 'Muestra un porcentaje aleatorio de cuan simp eres',

    async run(client, message, args) {
        let member = message.mentions.users.first() || message.author
        let rng = Math.floor(Math.random() * 101);
    
        const simpembed = new Discord.MessageEmbed()
          .setTitle(`Calculando nivel de simp...`)
          .setDescription(`${member.username} es ` + rng + "% Simp (￣y▽￣)╭")
          .setColor("RED");
    
        message.channel.send(simpembed)
    },
};