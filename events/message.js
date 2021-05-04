const Discord = require('discord.js');
const Levels = require('discord-xp');
const Timeout = new Discord.Collection();
const ms = require('ms');

module.exports = {
    name: 'message',

    async execute(message, client) {
        if (message.content.startsWith(client.prefix)) {
        const args = message.content.slice(client.prefix.length).trim().split(/ +/);
        const commandName = args.shift().toLowerCase();
        const com = client.commands.get(commandName) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));
        if (com) {
            if (com.cooldown) {
                if (Timeout.has(`${com.name}${message.author.id}`)) return message.channel.send(`Porfavor espera \`${ms(Timeout.get(`${com.name}${message.author.id}`) - Date.now(), { long: true })}\` antes de volver a usar el comando (。>︿<)_θ`);
                com.run(client, message, args)
                Timeout.set(`${com.name}${message.author.id}`, Date.now() + com.cooldown)
                setTimeout(() => {
                    Timeout.delete(`${com.name}${message.author.id}`)
                }, com.cooldown)
            } else com.run(client, message, args);
        }
    }

//-------------------- LEVEL ROLES --------------------\\
    function emoji (id) {
        return client.emojis.cache.get(id).toString();
    }
    const randomXP = Math.floor(Math.random() * 28) + 1;
    const hasLeveledUP = await Levels.appendXp(message.author.id, message.guild.id, randomXP);
    if (hasLeveledUP) {
        const user = await Levels.fetch(message.author.id, message.guild.id);
        message.channel.send(`¡${message.member} ha subido al nivel ${user.level}! ${emoji("839040672878428180")}`);

        const Sänger = message.guild.roles.cache.find(role => role.id == '832633898550820864');
        const Kurier = message.guild.roles.cache.find(role => role.id == '832633618814861333');
        const Zahmen = message.guild.roles.cache.find(role => role.id == '832633387570954273');
        const Schmied = message.guild.roles.cache.find(role => role.id == '832632886179266562');
        const Krieger = message.guild.roles.cache.find(role => role.id == '832632668994535424');
        const Lieger = message.guild.roles.cache.find(role => role.id == '832632419760603246');
        const Stätte = message.guild.roles.cache.find(role => role.id == '832632104055603201');
        const Heilen = message.guild.roles.cache.find(role => role.id == '832631853243695134');
        const Portal = message.guild.roles.cache.find(role => role.id == '832631495755563049');
        const Kontrolle = message.guild.roles.cache.find(role => role.id == '832631309590986822');
        const Herrschen = message.guild.roles.cache.find(role => role.id == '832631065415778385');
        const Wissen = message.guild.roles.cache.find(role => role.id == '832630796552372254');
        const Können = message.guild.roles.cache.find(role => role.id == '832630371337109584');

        if (user.level == 5) {
            if (message.member.roles.cache.has(Sänger)) return;
            else await message.member.roles.add(Sänger);
        }

        if (user.level == 10) {
            if (message.member.roles.cache.has(Kurier)) return;
            else await message.member.roles.add(Kurier).then(message.member.roles.remove(Sänger));
        }

        if (user.level == 15) {
          if (message.member.roles.cache.has(Zahmen)) return;
          else await message.member.roles.add(Zahmen).then(message.member.roles.remove(Kurier));
        }

        if (user.level == 20) {
            if (message.member.roles.cache.has(Schmied)) return;
            else await message.member.roles.add(Schmied).then(message.member.roles.remove(Zahmen));
        }

        if (user.level == 25) {
            if (message.member.roles.cache.has(Krieger)) return;
            else await message.member.roles.add(Krieger).then(message.member.roles.remove(Schmied));
        }

        if (user.level == 30) {
            if (message.member.roles.cache.has(Lieger)) return;
            else await message.member.roles.add(Lieger).then(message.member.roles.remove(Krieger));
        }

        if (user.level == 35) {
            if (message.member.roles.cache.has(Stätte)) return;
            else await message.member.roles.add(Stätte).then(message.member.roles.remove(Lieger));
        }

        if (user.level == 40) {
            if (message.member.roles.cache.has(Heilen)) return;
            else await message.member.roles.add(Heilen).then(message.member.roles.remove(Stätte));
        }

        if (user.level == 45) {
            if (message.member.roles.cache.has(Portal)) return;
            else await message.member.roles.add(Portal).then(message.member.roles.remove(Heilen));
        }
        
        if (user.level == 50) {
            if (message.member.roles.cache.has(Kontrolle)) return;
            else await message.member.roles.add(Kontrolle).then(message.member.roles.remove(Portal));
        }

        if (user.level == 55) {
            if (message.member.roles.cache.has(Herrschen)) return;
            else await message.member.roles.add(Herrschen).then(message.member.roles.remove(Kontrolle));
        }

        if (user.level == 60) {
            if (message.member.roles.cache.has(Wissen)) return;
            else await message.member.roles.add(Wissen).then(message.member.roles.remove(Herrschen));
        }

        if (user.level == 65) {
            if (message.member.roles.cache.has(Können)) return;
            else await message.member.roles.add(Können).then(message.member.roles.remove(Wissen));
        }
    }
}
}