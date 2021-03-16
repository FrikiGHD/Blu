const Discord = require('discord.js');
const bot = new Discord.Client();
const prefix = 'b!';
const { readdirSync } = require('fs');
const { join } = require('path');
const { runInContext } = require('vm');
const newUsers = new Discord.Collection();
const sniped = require("./events/messageDelete.js")
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

bot.on('guildMemberAdd', async(bot, member) => {
    const reglas = client.channels.cache.get('814170191285846026')
    const roles = client.channels.cache.get('817541794039595038')
    const anuncios = client.channels.cache.get('814240903316111391')
    const welcomeembed = new Discord.MessageEmbed()
    .setAuthor('**Dragón Blanco Dragón Negro**', 'https://i.imgur.com/W8Xsaex.jpg')
    .setColor('0x4c0424')
    .setTitle('Para empezar')
    .setURL('https://discord.gg/GyREVDhVX7')
    .setDescription(`¡Bienvenido al servidor de Dragón Blanco Dragón Negro, <@${member.id}>! Nuestro servidor también se conoce como "DBDN" para abreviar y tenemos una amplia variedad de canales que expllorar. Canales generales de texto y voz, canales de música, un lugar para hablar de vuestros intereses, preguntar por cosas del libro y ver noticias de éste y muchos más. También tenemos nuestros propios emojis originales y un bot personalizado llamado Blu con comandos útiles (usa "b!help" en el servidor para más información).`)
    .setDescription(`Primero, comencemos a mirar los canales importantes en nuestro servidor, como nuestras ${reglas}), obtengamos ${(roles)} para desbloquear canales ocultos y revisemos las nuevas noticias en ${anuncios}.`)
    .addField('**¿Necesitas ayuda?**', '¿Tienes algún problema relacionado con el servidor y no sabes como solucionarlo? Manda un mensaje a alguien con el rol de moderador para que te ayude')
    .addField('**Redes sociales**', 'Si quieres saber las redes sociales de Laraartss dónde sube contenido de DBDN, usa el comando "b!social" en uno de los canales del servidor.')
    .setTimestamp()
    .setFooter('Servidor creado por Laraartss y FrikiHD' ,'https://i.imgur.com/Yod8k0e.png')

    await bot.whisper(welcomeembed)
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