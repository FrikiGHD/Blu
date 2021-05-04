const Levels = require('discord-xp');

module.exports = {
    name: 'lvl',
    description: 'Menciona el nivel al que ha subido un usuario',
    async run (client, message, args) {
        const target = message.mentions.users.first() || message.author;
        const user = await Levels.fetch(target.id, message.guild.id);
        if (!user) return message.channel.send(`El miembro no tiene ningún nivel establecido`);
        try {
            message.channel.send(`> ${target.tag} está en el nivel ${user.level} y tiene ${user.xp}/${Levels.xpFor(user.level + 1)} de experiencia`);
        } catch (err) {
            console.log(err);
        }
    },
};