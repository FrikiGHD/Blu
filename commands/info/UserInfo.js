const Discord = require('discord.js');
const moment = require('moment');

module.exports = {
    name: 'userinfo',
    description: 'Muestra información del usuario',
  
    async run(client, message, args) {
        const member = message.mentions.members.first() || message.member;
		const roles = member.roles.cache
			.sort((a, b) => b.position - a.position)
			.map(role => role.toString())
			.slice(0, -1);

        const userinfoembed = new Discord.MessageEmbed()
            .setTitle(`INFORMACIÓN DE USUARIO`)
            .setThumbnail(member.user.displayAvatarURL({ dynamic: true, size: 512 }))
            .setColor('0xC4B1A6')
            .addField(`· __Nametag:__`, `${member.user.tag}`, true)
            .addField(`· __Apodo:__`, `${member.nickname || `Ninguno`}`, true)
            .addField(`· __ID de Usuario:__`, `${member.id}`, false)
            .addField(`· __Roles:__`, `${roles.length < 10 ? roles.join(', ') : roles.length > 10 ? this.client.utils.trimArray(roles) : 'Ninguno'}`, true)
            .addField(`· __Fecha de creación:__`, `${moment(member.user.createdTimestamp).format('DD, MMM Do YYYY')}`, false)
            .addField(`· __Fecha de unión al servidor:__`, `${moment(member.joinedAt).format('DD, MMM Do YYYY')}`, true);

        message.channel.send(userinfoembed);
    },
};