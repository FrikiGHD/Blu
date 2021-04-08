const Discord = require('discord.js');
const canvacord = require('canvacord');
const Levels = require('discord-xp');

module.exports = {
    name: 'rango',
    description: 'Muestra una targeta con los niveles de un usuario',

    async run (bot, message, args) {

        let mentionedMember = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        if (!mentionedMember) mentionedMember = message.member;

        const target = await Levels.fetch(mentionedMember.user.id, message.guild.id);
        if (!target) return message.channel.send('El miembro no tiene ningún nivel establecido o(゜ヘ゜o)');
        const neededXP = Levels.xpFor(parseInt(target.level) + 1);

        let rankcard = new canvacord.Rank()
            .setAvatar(mentionedMember.user.displayAvatarURL({format: 'png', dynamic: true}))
            .setCurrentXP(target.xp)
            .setRequiredXP(neededXP)
            .setStatus(mentionedMember.user.presence.status)
            .setLevel(target.level)
            .setRank(1, 'RANK', false)
            .setProgressBar("#579AD9", "COLOR")
            .setOverlay("#000000")
            .setUsername(mentionedMember.user.username)
            .setDiscriminator(mentionedMember.user.discriminator)
            .setBackground("IMAGE", "https://i.imgur.com/EuUxMio.png")
            rankcard.build()
            .then(data => {
                const attachment = new Discord.MessageAttachment(data, "rango.png")
                message.channel.send(attachment)
            })
    }
}