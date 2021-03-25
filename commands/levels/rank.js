const Discord = require('discord.js');
const canvacord = require('canvacord');
const Levels = require('discord-xp');

module.exports = {
    name: 'rango',
    description: 'Muestra un canva del rango del usuario',
    async run (bot, message, args) {
        let mentionedMember = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        if (!mentionedMember) mentionedMember = message.member;

        const target = await Levels.fetch(mentionedMember.user.id, message.guild.id);
        if (!target) return message.channel.send('El miembro no tiene ningún nivel establecido o(゜ヘ゜o)');
        const neededXP = Levels.xpFor(parseInt(target.level) + 1);

        const rank = new canvacord.Rank()
        .setAvatar(mentionedMember.user.displayAvatarURL({ dynamic: false, format: 'png' }))
        .setCurrentXP(target.xp)
        .setLevel(target.level)
        .setRequiredXP(neededXP)
        .setStatus(mentionedMember.user.presence.status)
        .setProgressBar("#FFFFFF", "COLOR")
        .setUsername(mentionedMember.user.username)
        .setDiscriminator(mentionedMember.user.discriminator);
    rank.build()
        .then(data => {
            const attachment = new Discord.MessageAttachment(data, "RankCard.png");
            message.channel.send(attachment);
        });
    }
}