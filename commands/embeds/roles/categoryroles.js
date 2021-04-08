const Discord = require('discord.js');

module.exports = {
    name: "categoryroles",
    description: "crear roles de categorías para los canales ocultos",

    async run (bot, message, args) {
        if (!message.member.roles.cache.has('814171986598690857')) return message.channel.send("No puedes usar este comando （︶^︶）");

        const channel = '817541794039595038';
        const artistemoji = '🎨';
        const otakuemoji = '⛩️';
        const gameremoji = '🎮';
        const artista = message.guild.roles.cache.find(role => role.name === "Artista");
        const otaku = message.guild.roles.cache.find(role => role.name === "Otaku");
        const gamer = message.guild.roles.cache.find(role => role.name === "Gamer");

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
        })
        let categoryrolesembed = await message.channel.send(categoryroles)
        categoryrolesembed.react(artistemoji)
        categoryrolesembed.react(otakuemoji)
        categoryrolesembed.react(gameremoji)

        bot.on('messageReactionAdd', async (reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;

            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === artistemoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(artista);
                }
                if (reaction.emoji.name === otakuemoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(otaku);
                }
                if (reaction.emoji.name === gameremoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(gamer);
                }
            } else {
                return;
            }
        });

        bot.on('messageReactionRemove', async (reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;

            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === artistemoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(artista);
                }
                if (reaction.emoji.name === otakuemoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(otaku);
                }
                if (reaction.emoji.name === gameremoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(gamer);
                }
            } else {
                return;
            }
        });
    }
}