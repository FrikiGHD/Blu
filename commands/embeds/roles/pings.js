const Discord = require('discord.js');

module.exports = {
    name: "pings",
    description: "crear roles para los pings",

    async run (bot, message, args) {

        if (!message.member.roles.cache.has('814171986598690857')) return message.channel.send("No puedes usar este comando （︶^︶）");
        const anuncios = bot.channels.cache.get('814240903316111391')
        
        const channelID = '817541794039595038';
        const weeklymoji = '⭐';
        const gamenightsemoji = '🕹️';
        const weekly = message.guild.roles.cache.find(role => role.name === "Curiosidades Semanales");
        const gamenights = message.guild.roles.cache.find(role => role.name === "Gamenights");

        let pings = new Discord.MessageEmbed()
        .setTitle('**PINGS**')
        .setColor('0xe18a44')
        .addField("🇪🇸 | Español", `Selecciona una reacción para obtener el rol y ser mencionado cuando se utilice en ${anuncios}`)
        .addField("🇺🇸 | English", `Select a reaction to get the role and get mentioned when it's used in \n ${anuncios}`)
        .addFields({
            name: '__Curiosidades semanales__ | ⭐',
            value: "***ES*** - Rol para ser mencionado cuando se anuncien curiosidades semanales \n ***EN*** - Role to be mentioned when there's a weekly curiosities announcement"
        },
        {
            name: '__Gamenights__ | 🕹️',
            value: `***ES*** - Rol para ser mencionado cuando se haga un anuncio de "noche de juegos" \n ***EN*** - Role to be mentioned when there's a gamenight announcement`
        })

        let pingsembed = await message.channel.send(pings)
        pingsembed.react(weeklymoji)
        pingsembed.react(gamenightsemoji)
        
        bot.on('messageReactionAdd', async (reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;

            if (reaction.message.channel.id == channelID) {
                if (reaction.emoji.name === weeklymoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(weekly);
                }
                if (reaction.emoji.name === gamenightsemoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(gamenights);
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

            if (reaction.message.channel.id == channelID) {
                if (reaction.emoji.name === weeklymoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(weekly);
                }
                if (reaction.emoji.name === gamenightsemoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(gamenights);
                }
            } else {
                return;
            }
        });
    }
}