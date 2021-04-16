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
                let role = await message.guild.roles.cache.find(role => role.name == "Sänger");
                if (message.member.roles.cache.has(role.id)) return;
                else await message.member.roles.add(role.id);
            }

            if (user.level == 15) {
                let role = await message.guild.roles.cache.find(role => role.name == "Kurier");
                if (message.member.roles.cache.has(role.id)) return;
                else await message.member.roles.add(role.id);
            }

            if (user.level == 25) {
                let role = await message.guild.roles.cache.find(role => role.name == "Zahmen");
                if (message.member.roles.cache.has(role.id)) return;
                else await message.member.roles.add(role.id);
            }

            if (user.level == 35) {
                let role = await message.guild.roles.cache.find(role => role.name == "Schmied");
                if (message.member.roles.cache.has(role.id)) return;
                else await message.member.roles.add(role.id);
            }

            if (user.level == 45) {
                let role = await message.guild.roles.cache.find(role => role.name == "Krieger");
                if (message.member.roles.cache.has(role.id)) return;
                else await message.member.roles.add(role.id);
            }

            if (user.level == 55) {
                let role = await message.guild.roles.cache.find(role => role.name == "Lieger");
                if (message.member.roles.cache.has(role.id)) return;
                else await message.member.roles.add(role.id);
            }

            if (user.level == 60) {
                let role = await message.guild.roles.cache.find(role => role.name == "Stätte");
                if (message.member.roles.cache.has(role.id)) return;
                else await message.member.roles.add(role.id);
            }

            if (user.level == 65) {
                let role = await message.guild.roles.cache.find(role => role.name == "Heilen");
                if (message.member.roles.cache.has(role.id)) return;
                else await message.member.roles.add(role.id);
            }

            if (user.level == 70) {
                let role = await message.guild.roles.cache.find(role => role.name == "Portal");
                if (message.member.roles.cache.has(role.id)) return;
                else await message.member.roles.add(role.id);
            }
            
            if (user.level == 75) {
                let role = await message.guild.roles.cache.find(role => role.name == "Kontrolle");
                if (message.member.roles.cache.has(role.id)) return;
                else await message.member.roles.add(role.id);
            }

            if (user.level == 85) {
                let role = await message.guild.roles.cache.find(role => role.name == "Herrschen");
                if (message.member.roles.cache.has(role.id)) return;
                else await message.member.roles.add(role.id);
            }

            if (user.level == 100) {
                let role = await message.guild.roles.cache.find(role => role.name == "Wissen");
                if (message.member.roles.cache.has(role.id)) return;
                else await message.member.roles.add(role.id);
            }

            if (user.level == 125) {
                let role = await message.guild.roles.cache.find(role => role.name == "Können");
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