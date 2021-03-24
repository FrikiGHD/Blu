module.exports = {
    name: 'message',
    execute(message, bot) {
    if(message.author.bot) return;
        if(message.channel.type === 'dm') return;

        if(message.content.startsWith(bot.prefix)) {
            const args = message.content.slice(bot.prefix.length).trim().split(/ +/);

            const command = args.shift().toLowerCase();

            if(!bot.commands.has(command)) return;

            try {
                bot.commands.get(command).run(bot, message, args);
            } catch (error){
                console.error(error);
            }
        }
    }
}