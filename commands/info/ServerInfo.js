const Discord = require('discord.js');
const moment = require('moment');

module.exports = {
    name: 'serverinfo',
    description: 'Muestra información del servidor',
  
    async run(client, message, args) {
        moment.locale('es');
        const Lara = client.users.cache.get('715995052492587038');
        const Friki = client.users.cache.get('340203396500029441');
        const members = message.guild.members.cache;
        const serverinfoembed = new Discord.MessageEmbed()
            .setTitle(`INFORMACIÓN DEL SERVIDOR`)
            .setThumbnail(message.guild.iconURL())
            .setColor('0xC4B1A6')
            .addFields(
                {name: `· __Miembros:__`, value: `${message.guild.memberCount}`, inline: true},
                {name: `· __Bots:__`, value: `${members.filter(member => member.user.bot).size}`, inline: true},
                {name: `· __Propietarios:__`, value: `${Lara} & ${Friki}`},
                {name: `· __Fecha de creación:__`, value: `${moment(message.guild.createdAt).format('LLL')}`, inline: false},
            );
            
        message.channel.send(serverinfoembed);
    },
};