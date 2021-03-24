const Levels = require('discord-xp');

module.exports = {
    name: 'nivel',
    description: 'Menciona el nivel al que ha subido un usuario',
    async execute(bot, message, args) {
        let mentionedMember = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        if (!mentionedMember) mentionedMember = message.member;

        const target = await Levels.fetch(mentionedMember.user.id, message.guild.id);
        if (!target) return message.channel.send('El miembro no tiene ningún nivel establecido o(゜ヘ゜o)');

        try {
            message.channel.send(`${mentionedMember.user.tag} está en el nivel ${target.level} y tiene ${target.xp}/${Levels.xpFor(target.level + 1)} de experiencia`)
        } catch (err) {
            console.log(err);
        }
    },
};