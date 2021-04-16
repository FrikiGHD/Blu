const Levels = require('discord-xp');

module.exports = {
    name: 'message',
    async execute(message, bot) {
    if(message.author.bot) return;
        if(message.channel.type === 'dm') return;

        const randomXP = Math.floor(Math.random() * 28) + 1;
        const hasLeveledUP = await Levels.appendXp(message.author.id, message.guild.id, randomXP);
        if (hasLeveledUP) {
            const user = await Levels.fetch(message.author.id, message.guild.id);
            message.channel.send(`¡${message.member} ha subido al nivel ${user.level}! ✧o(＾▽＾)o✧`);

            if (user.level == 5) {
                let role = message.guild.roles.cache.find(role => role.id == "832633898550820864");
                if (message.member.roles.cache.has(role.id)) return;
                else await message.member.roles.add(role.id);
            }

            if (user.level == 15) {
                let role = message.guild.roles.cache.find(role => role.id == "832633618814861333");
                if (message.member.roles.cache.has(role.id)) return;
                else await message.member.roles.add(role.id);
            }

            if (user.level == 25) {
                let role = message.guild.roles.cache.find(role => role.id == "832633387570954273");
                if (message.member.roles.cache.has(role.id)) return;
                else await message.member.roles.add(role.id);
            }

            if (user.level == 35) {
                let role = message.guild.roles.cache.find(role => role.id == "832632886179266562");
                if (message.member.roles.cache.has(role.id)) return;
                else await message.member.roles.add(role.id);
            }

            if (user.level == 45) {
                let role = message.guild.roles.cache.find(role => role.id == "832632668994535424");
                if (message.member.roles.cache.has(role.id)) return;
                else await message.member.roles.add(role.id);
            }

            if (user.level == 55) {
                let role = message.guild.roles.cache.find(role => role.id == "832632419760603246");
                if (message.member.roles.cache.has(role.id)) return;
                else await message.member.roles.add(role.id);
            }

            if (user.level == 60) {
                let role = message.guild.roles.cache.find(role => role.id == "832632104055603201");
                if (message.member.roles.cache.has(role.id)) return;
                else await message.member.roles.add(role.id);
            }

            if (user.level == 65) {
                let role = message.guild.roles.cache.find(role => role.id == "832631853243695134");
                if (message.member.roles.cache.has(role.id)) return;
                else await message.member.roles.add(role.id);
            }

            if (user.level == 70) {
                let role = message.guild.roles.cache.find(role => role.id == "832631495755563049");
                if (message.member.roles.cache.has(role.id)) return;
                else await message.member.roles.add(role.id);
            }
            
            if (user.level == 75) {
                let role = message.guild.roles.cache.find(role => role.id == "832631309590986822");
                if (message.member.roles.cache.has(role.id)) return;
                else await message.member.roles.add(role.id);
            }

            if (user.level == 85) {
                let role = message.guild.roles.cache.find(role => role.id == "832631065415778385");
                if (message.member.roles.cache.has(role.id)) return;
                else await message.member.roles.add(role.id);
            }

            if (user.level == 100) {
                let role = message.guild.roles.cache.find(role => role.id == "832630796552372254");
                if (message.member.roles.cache.has(role.id)) return;
                else await message.member.roles.add(role.id);
            }

            if (user.level == 125) {
                let role = message.guild.roles.cache.find(role => role.id == "832630371337109584");
                if (message.member.roles.cache.has(role.id)) return;
                else await message.member.roles.add(role.id);
            }
        }
        
//---------------------------------------------------------

        if(!message.content.startsWith(bot.prefix)) return;
        
            const args = message.content.slice(bot.prefix.length).trim().split(/ +/);
            const commandName = args.shift().toLowerCase();

            if(!bot.commands.has(commandName)) return;

            const command = bot.commands.get(commandName);

            try {
                command.run(bot, message, args);
            } catch (err){
                console.log(err);
            }

            if (command === 'reactionrole') {
                bot.commands.get('reactionrole').run(bot, message, args);
            } 
        }
}