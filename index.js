const Discord = require('discord.js');
const bot = new Discord.Client();
const prefix = 'b!';
const { readdirSync } = require('fs');
const { join } = require('path');
const { runInContext } = require('vm');
const newUsers = new Discord.Collection();
const sniped = require("./events/messageDelete.js")
const mongoose = require('mongoose');
bot.commands = new Discord.Collection();
bot.snipes = new Discord.Collection();
require("dotenv").config();
sniped(bot)

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

//READY CONSOLE - STATUS//
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

//BOT.ON MESSAGE//
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

//-----------------------------------------------------------------

//WELCOME MESSAGE

bot.on('guildMemberAdd', async(member) => {
    const Channel = member.guild.channels.cache.get('814169775994699809')
    const Rules = '814170191285846026'
    Channel.send(`¡Bienvenid@ al servidor de Discord de Laraartss: Dragón Blanco Dragón Negro, <@${member.id}>! Por favor, lee el canal de ${member.guild.channels.cache.get(Rules).toString()} y reacciona al ✅ del mensaje para desbloquear los canales`)
})

//GOODBYE MESSAGE

bot.on('guildMemberRemove', async(member) => {
    const Channel = member.guild.channels.cache.get('814169775994699809')
    const Rules = member.guild.channels.cache.get('814170191285846026')
    Channel.send(`<@${member.id}> se ha ido del servidor /(ㄒoㄒ)/~~`) //${member.displayName}
})

//----------------------------------------------------------------

//MONITOR//

const keepAlive = require('./server');
const Monitor = require('ping-monitor');
 
keepAlive();
const monitor = new Monitor({
    website: 'LINK',
    title: 'Nombre',
    interval: 30 // minutes
});
 
monitor.on('up', (res) => console.log(`${res.website} está encedido.`));
monitor.on('down', (res) => console.log(`${res.website} se ha caído - ${res.statusMessage}`));
monitor.on('stop', (website) => console.log(`${website} se ha parado.`) );
monitor.on('error', (error) => console.log(error));

//-----------------------------------------------------

//TOKEN//
bot.login(process.env.DISCORD_TOKEN);