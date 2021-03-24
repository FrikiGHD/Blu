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
            message.channel.send(`¡${message.member} ha subido al nivel ${user.level}! ✧o(＾▽＾)o✧`)
        }

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
        }
}