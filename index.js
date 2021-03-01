const Discord = require('discord.js');

const bot = new Discord.Client();

require("dotenv").config();

const { readdirSync } = require('fs');

const { join } = require('path');
const { runInContext } = require('vm');

bot.commands = new Discord.Collection();

const prefix = 'b!';

//-------------------------------------------------------------------------------
function readFiles(dir) {
    const paths = readdirSync(dir, { withFileTypes: true });

    return paths.reduce((files, path) => {
        if (path.isDirectory()) {
            files.push(...readFiles(join(dir, path.name)));
        } else if (path.isFile()) {
            files.push(join(dir, path.name));
        }

        return files;
    }, []);
}

const commandFiles = readFiles("commands").filter(file => file.endsWith(".js"));
bot.commands = new Discord.Collection();

for (const file of commandFiles) {
    const command = require(join(__dirname, file));
    bot.commands.set(command.name, command);
}
//-----------------------------------------------------------------------------


bot.on("error", console.error);

//-----------------------------------------------------------------------------
bot.on('ready', () => {
    console.log('El bot está listo');

    const arrayOfStatus = [
        `Blu | b!help`,
        `escondite con Nika o(^▽^)o`
    ];

    let index = 0;
    setInterval(() => {
        if(index === arrayOfStatus.length) index = 0;
        const status = arrayOfStatus[index];
        bot.user.setActivity(status, { type: "PLAYING" }).catch(console.error)
        index++;
    }, 10000) //en ms
})
//-----------------------------------------------------------------------------
bot.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === 'dm') return;

    if(message.content.startsWith(prefix)) {
        const args = message.content.slice(prefix.length).trim().split(/ +/);

        const command = args.shift().toLowerCase();

        if(!bot.commands.has(command)) return;

        try {
            bot.commands.get(command).run(bot, message, args);
        } catch (error){
            console.error(error);
        }
    }
})

bot.login(process.env.DISCORD_TOKEN);