const Discord = require('discord.js');

module.exports = {
    name: "categoryroles",
    description: "crear roles de categorías para los canales ocultos",

    async run (client, message, args) {
        if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(`No puedes utilizar este comando o(一︿一+)o`);
        if (!message.guild.me.hasPermission("MANAGE_MESSAGES")) return message.channel.send(`No tengo los permisos necesarios (ˉ▽ˉ；)...`);

        let categoryroles = new Discord.MessageEmbed()
        .setTitle('**ROLES DE CATEGORÍAS**')
        .setColor('0xe18a44')
        .addField("🇪🇸 | Español", `Selecciona un rol reaccionando al emoji correspondiente \n (y desbloquear los canales ocultos de cada categoría)`)
        .addField("🇺🇸 | English", `Select a role reacting to the corresponding emoji \n (and unlock the hidden channels of each category)`)
        .addFields({
            name: '__Artistas__ | 🎨',
            value: `***ES*** - Rol para los dibujantes del server \n ***EN*** - Role for the artists of the server`
        },
        {
            name: '__Otakus__ | ⛩️',
            value: `***ES*** - Rol para los amantes de anime \n ***EN*** - Role for the anime lovers`
        },
        {
            name: '__Gamers__ | 🎮',
            value: `***ES*** - Rol para los gamers del servidor \n ***EN*** - Role for the gamers of the server`
        },
        {
            name: '__Escritores__ | 📖',
            value: `***ES*** - Rol para los amantes de la escritura \n ***EN*** - Role for the writing lovers`
        });
        await message.channel.send(categoryroles)
    }
}