const Discord = require('discord.js');
const canvacord = require('canvacord');
const Levels = require('discord-xp');

module.exports = {
    name: 'rank',
    description: 'Muestra una targeta con los niveles de un usuario',

    async run (client, message, args) {
        const target = message.mentions.users.first() || message.author;
        const user = await Levels.fetch(target.id, message.guild.id);
        if (!user) return message.channel.send('El miembro no tiene ningún nivel establecido o(゜ヘ゜o)');
        const neededXP = Levels.xpFor(parseInt(user.level) + 1)
    
        let rankcard = new canvacord.Rank()
          .setAvatar(target.displayAvatarURL({format: 'jpg', dynamic: true}))
          .setBackground("IMAGE", "https://i.imgur.com/PbeUX8T.jpg")
          .setRank(1, 'RANK', false)
          .setLevel(user.level)
          .setCurrentXP(user.xp)
          .setRequiredXP(neededXP)
          .setStatus(target.presence.status)
          .setProgressBar("#579AD9", "COLOR")
          .setOverlay("#000000")
          .setUsername(target.username)
          .setDiscriminator(target.discriminator);
            
          rankcard.build()
            .then(data => {
              const attachment = new Discord.MessageAttachment(data, "rango.jpg");
              message.channel.send(attachment);
            });
    },
};