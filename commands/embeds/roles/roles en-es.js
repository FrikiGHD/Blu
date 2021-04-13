const Discord = require('discord.js');

module.exports = {
    name: "roleslang",
    description: "crear roles para los idiomas",

    async run (bot, message, args) {

        if (!message.member.roles.cache.has('814171986598690857')) return message.channel.send("No puedes usar este comando （︶^︶）");
        
        const channelID = '817541794039595038';
        const esemoji = '🇪🇸';
        const enemoji = '🇺🇸';
        const es = message.guild.roles.cache.find(role => role.name === "Español");
        const en = message.guild.roles.cache.find(role => role.name === "English");
        
        let roleslang = new Discord.MessageEmbed()
        .setTitle('**IDIOMA / LANGUAGE**')
        .setColor('0xe18a44')
        .addField("🇪🇸 | Español", `Selecciona una reacción para obtener el rol según tu idioma`)
        .addField("🇺🇸 | English", `Select a reaction to get the role according to your language`)
        .addFields({
            name: '__Español__',
            value: 'Elige este si hablas español | 🇪🇸'
        },
        {
            name: '__English__',
            value: 'Choose this one if you speak english | 🇺🇸'
        })

        let langembed = await message.channel.send(roleslang)
        await langembed.react(esemoji)
        await langembed.react(enemoji)

        bot.on('messageReactionAdd', async (reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;

            if (reaction.message.channel.id == channelID) {
                if (reaction.emoji.name === esemoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(es);
                }
                if (reaction.emoji.name === enemoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(en);
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
                if (reaction.emoji.name === esemoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(es);
                }
                if (reaction.emoji.name === enemoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(en);
                }
            } else {
                return;
            }
        });
    }
}