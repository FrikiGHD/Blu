const Discord = require('discord.js');

module.exports = {
    name: "roles",
    description: "crear roles para los canales ocultos",

    async run (client, message, args) {
        if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(`No puedes utilizar este comando o(一︿一+)o`);
        if (!message.guild.me.hasPermission("MANAGE_MESSAGES")) return message.channel.send(`No tengo los permisos necesarios (ˉ▽ˉ；)...`);
        
        const roles = new Discord.MessageEmbed()
        .setColor('0xe18a44')
        .setImage('https://i.imgur.com/dlQj4k2.png')
        await message.channel.send(roles)
    }
}