const Discord = require('discord.js');

module.exports = {
    name: "reglas",
    description: "crear reglas para obtener el rol de miembro",

    async run (client, message, args) {
        if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(`No puedes utilizar este comando o(一︿一+)o`);
        if (!message.guild.me.hasPermission("MANAGE_MESSAGES")) return message.channel.send(`No tengo los permisos necesarios (ˉ▽ˉ；)...`);

        let reglas = new Discord.MessageEmbed()
        .setImage('https://i.imgur.com/mQ4MVV1.png')
        .setColor('0xE97E1F');

        let reglases = new Discord.MessageEmbed()
        .setTitle('**REGLAS DEL SERVIDOR**')
        .setColor('0xE97E1F')
        .setThumbnail('https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/emoji-one/5/flag-for-spain_1f1ea-1f1f8.png')
        .setDescription('Porfavor lee las reglas. El hecho de que no respetes las normas puede hacer que te ganes un aviso (cuando hayas llegado a los tres avisos graves, serás expulsado si los administradores lo ven necesario)')
        .addFields(
            {name: '__Regla 1__', value: 'No insultar a otros miembros, debes respetar a los demás y sus opiniones.'},
            {name: '__Regla 2__', value: 'No compartas contenido inapropiado, este no es un sitio para hacer eso.'},
            {name: '__Regla 3__', value: 'Usa los canales apropiadamente, cada uno tiene su función.'},
            {name: '__Regla 4__', value: 'Haz caso a los administradores / moderadores.'},
            {name: '__Regla 5__', value: 'No sofoques a base de menciones, es molesto.'},
            {name: '__Regla 6__', value: 'No hagas spam sobre apps, sitios, etc.'},
            {name: '__Regla 7__', value: 'Y sobretodo, pásatelo bien ;3 \n \n Reacciona con ✅ para desbloquear los canales\n(si no funciona, escríbele a un moderador)'},);
        
        let reglasen = new Discord.MessageEmbed()
        .setTitle('**SERVER RULES**')
        .setColor('0xE97E1F')
        .setThumbnail('https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/twitter/281/flag-united-states_1f1fa-1f1f8.png')
        .setDescription(`Please read the rules. Not respecting these rules will lead you to get a warning (if you get three warnings, you will be kicked if the administrators find it necessary)`)
        .addFields(
            {name: '__Rule 1__', value: `Don't insult other members, you have to respect the others and their opinions.`},
            {name: '__Rule 2__', value: `Don't share inapropiate content, this is not a place to do so.`},
            {name: '__Rule 3__', value: `Use the channels appropriately, each one has its own function.`},
            {name: '__Rule 4__', value: `Pay attention to administrators / moderators.`},
            {name: '__Rule 5__', value: `Don't spam mentions, it's annoying.`},
            {name: '__Rule 6__', value: `Don't spam apps, sites, etc.`},
            {name: '__Rule 7__', value: `And most importantly, have fun ;3 \n \n React with ✅ to unlock channels\n(if it doesn't work, dm a moderator)`},);

            await message.channel.send(reglas).then(message.channel.send(reglases).then(message.channel.send(reglasen)))
    }
}