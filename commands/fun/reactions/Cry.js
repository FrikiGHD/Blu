const Discord = require('discord.js');

module.exports = {
    name: 'cry',
    description: 'Usa este comando para que Blu llore por tí',

    async run(client, message, args) {
        function emoji (id) {
            return client.emojis.cache.get(id).toString();
        }
        let member = message.mentions.users.first() || message.author
        let cryembed = new Discord.MessageEmbed()
          .setDescription(`**${member.username}** se ha puesto a llorar ${emoji("839040672404996116")}`)
          .setColor(0x3D8DBF)
          .setImage("https://i.imgur.com/stfoq5P.gif");
            
         message.channel.send(cryembed)
    },
};