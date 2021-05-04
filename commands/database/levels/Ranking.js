const Discord = require('discord.js');
const Levels = require('discord-xp');

module.exports = {
    name: 'ranking',
    description: 'Muestra el top 5 de usuarios por niveles',

    async run (client, message, args) {
        const rawLeaderboard = await Levels.fetchLeaderboard(message.guild.id, 10);
        if (rawLeaderboard.length < 1) return message.reply("No hay nadie en la tabla de clasificación aún.");
        const leaderboard = await Levels.computeLeaderboard(client, rawLeaderboard, true);
        const lb = leaderboard.map(e => `**${e.position}.** ${e.username}#${e.discriminator}\n**Nivel:** ${e.level}\n**XP:** ${e.xp.toLocaleString()}`);
        const lbembed = new Discord.MessageEmbed()
        .setColor("0xC4B1A6")
        .setTitle("CLASIFICACIÓN POR NIVELES")
        .setDescription(lb.join("\n\n"));
    
        message.channel.send(lbembed)
    },
};