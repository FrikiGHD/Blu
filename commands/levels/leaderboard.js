const Levels = require('discord-xp');

module.exports = {
    name: 'clasificacion',
    description: 'Muestra el top 5 de usuarios por niveles',
    async run (bot, message, args) {
        const rawLeaderboard = await Levels.fetchLeaderboard(message.guild.id, 5);

        if (rawLeaderboard.length < 1) return reply("No hay nadie en la tabla de clasificación aún.");

        const leaderboard = await Levels.computeLeaderboard(bot, rawLeaderboard, true);

        const lb = leaderboard.map(e => `> ${e.position}. ${e.username}#${e.discriminator}\n> Nivel: ${e.level}\n> XP: ${e.xp.toLocaleString()}`);

        message.channel.send(`**Tabla de clasificación**:\n\n${lb.join("\n\n")}`);
    },
};