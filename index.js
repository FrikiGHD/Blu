require('dotenv').config();
const Discord = require('discord.js');
const client = new Discord.Client();
const { readdirSync } = require('fs');
const { join } = require('path');
const Levels = require('discord-xp');
const canvacord = require('canvacord');
const sniped = require("./events/messageDelete.js");
const mongoose = require('./commands/database/mongoose');
mongoose.init();
Levels.setURL(`mongodb+srv://FrikiHD:${process.env.PASS}@blu.iaaoq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`);

client.commands = new Discord.Collection();
client.snipes = new Discord.Collection();
sniped(client)
client.on("error", console.error);
client.prefix = process.env.prefix;
client.login(process.env.token);

//-------------------- EVENT HANDLER --------------------\\

const eventFiles = readdirSync('./events').filter(file => file.endsWith('.js'));

for (const file of eventFiles) {
	const event = require(`./events/${file}`);
	if (event.once) {
		client.once(event.name, (...args) => event.execute(...args, client));
	} else {
		client.on(event.name, (...args) => event.execute(...args, client));
	}
}

//-------------------- COMMAND HANDLER --------------------\\

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
    client.commands.set(command.name, command);
}

//-------------------- WELCOME MESSAGE --------------------\\

client.on('guildMemberAdd', async(member) => {
    const welcomechannel = member.guild.channels.cache.get('814169775994699809');
    const rules = member.guild.channels.cache.get('814170191285846026');
    welcomechannel.send(`¡Bienvenid@ al servidor de Discord de Laraartss: Dragón Blanco Dragón Negro, <@${member.id}>! Por favor, lee el canal de ${rules} y reacciona al ✅ del mensaje para desbloquear los canales`);

    const roles = client.channels.cache.get('817541794039595038');
    const reglas = client.channels.cache.get('814170191285846026');
    const anuncios = client.channels.cache.get('814240903316111391');
    const welcomeembed = new Discord.MessageEmbed()
    .setAuthor('Dragón Blanco Dragón Negro', 'https://i.imgur.com/W8Xsaex.jpg')
    .setColor('0x4c0424')
    .setTitle('Para empezar')
    .setURL('https://discord.gg/GyREVDhVX7')
    .setDescription(`¡Bienvenido al servidor de Dragón Blanco Dragón Negro, <@${member.id}>! \n Nuestro servidor también se puede abreviar como "DBDN" y contiene una gran variedad de canales. \n Canales generales de texto y voz, canales de música, un lugar para hablar de vuestros intereses, preguntar por cosas del libro y ver noticias de éste y muchos más. \n También tenemos nuestros propios emojis originales y un bot personalizado llamado Blu con comandos útiles (usa "b!help" en el servidor para más información). \n \n Primero, comencemos a mirar los canales importantes en nuestro servidor, como nuestras ${reglas}, obtengamos ${roles} para desbloquear canales ocultos y revisemos las nuevas noticias en ${anuncios}.`)
    .addField('**¿Necesitas ayuda?**', '¿Tienes algún problema relacionado con el servidor y no sabes como solucionarlo? Manda un mensaje a alguien con el rol de moderador para que te ayude')
    .addField('**Redes sociales**', 'Si quieres saber las redes sociales de Laraartss dónde sube contenido de DBDN, usa el comando "b!social" en uno de los canales del servidor.')
    .setTimestamp()
    .setFooter('Servidor creado por Laraartss y FrikiHD' ,'https://i.imgur.com/Yod8k0e.png');

    member.send(welcomeembed)
})

//-------------------- GOODBYE MESSAGE --------------------\\

client.on('guildMemberRemove', async(member) => {
    const channel = member.guild.channels.cache.get('814169775994699809');
    channel.send(`<@${member.id}> se ha ido del servidor /(ㄒoㄒ)/~~`);
})

//-------------------- ECONOMY SYSTEM --------------------\\

const coinSchema = require('./Schema/Coins');
client.bal = (userId) => new Promise(async ful => {
  const data = await coinSchema.findOne({ userId });
  if(!data) return ful(0);
  ful(data.coins);
})

client.add = (userId, coins) => {
  coinSchema.findOne({ userId }, async (err, data) => {
    if(err) throw err;
    if(data) {
      data.coins += coins;
    } else {
      data = new BalanceSchema({
        userId,
        coins
      })
    }
    data.save();
  })
}

client.remove = (userId, coins) => {
  coinSchema.findOne({ userId }, async (err, data) => {
    if(err) throw err;
    if(data) {
      data.coins -= coins;
    } else {
      data = new BalanceSchema({
        userId,
        coins: -coins
        
      })
    }
    data.save();
  })
}