const Levels = require('discord-xp');

module.exports = {
    name: 'lvledit',
    description: 'edita la xp o nivel de un usuario',

    async run (bot, message, args) {
        if (!message.member.roles.cache.has('814171986598690857')) return message.channel.send("No puedes usar este comando （︶^︶）");
        
        let usage = 'b!lvledit @miembro [xp, nivel] [add, set, remove] <número>';
        const mentionedMember = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

        if(!args[0]) return message.channel.send(`Necesitas añadir más argumentos \`${usage}\``);
        if (!mentionedMember) return message.channel.send('El miembro no está en el servidor');
        if(!args[1]) return message.channel.send(`Tienes que especificar si editarás la xp o el nivel \`${usage}\``);
        if (!['xp', 'nivel'].includes(args[1])) return message.channel.send('No has puesto xp o nivel en el segundo argumento ' + usage);
        if (args[1] == 'xp') {
            if (!['add', 'set', 'remove'].includes(args[2])) return message.channel.send(`Tienes que especificar si quieres añadir, establecer o quitar xp del miembro ` + user);
            const value = Number(args[3]);
            const levelUser = await Levels.fetch(mentionedMember.user.id, message.guild.id);
            if (!levelUser) return message.channel.send(`El miembro no está registrado en la base de datos aún`);
            if (args[2] == 'add') {
                if (!value) return message.channel.send(`El número que has escrito no es válido`);
                try {
                    await Levels.appendXp(mentionedMember.user.id, message.guild.id, value);
                    message.channel.send(`Se ha añadido ${value} XP a ${mentionedMember.user.tag}`);
                } catch (err) {
                    console.log(err);
                }
            } else if (args[2] == 'remove') {
                if (!value) return message.channel.send(`El número que has escrito no es válido`);
                try {
                    await Levels.subtractXp(mentionedMember.user.id, message.guild.id, value);
                    message.channel.send(`Se ha quitado ${value} XP de ${mentionedMember.user.tag}`);
                } catch (err) {
                    console.log(err);
                }
            } else if (args[2] == 'set') {
                if (!value) return message.channel.send(`El número que has escrito no es válido`);
                try {
                    await Levels.setXp(mentionedMember.user.id, message.guild.id, value);
                    message.channel.send(`Se ha establecido ${value} XP a ${mentionedMember.user.tag}`);
                } catch (err) {
                    console.log(err);
                }
            }
        } else if (args[1] == 'nivel') {
            if (!['add', 'set', 'remove'].includes(args[2])) return message.channel.send(`Tienes que especificar si quieres añadir, establecer o quitar niveles del miembro ` + user);
            const value = Number(args[3]);
            const levelUser = await Levels.fetch(mentionedMember.user.id, message.guild.id);
            if (!levelUser) return message.channel.send(`El miembro no está registrado en la base de datos aún`);
            if (args[2] == 'add') {
                if (!value) return message.channel.send(`El número que has escrito no es válido`);
                try {
                    await Levels.appendLevel(mentionedMember.user.id, message.guild.id, value);
                    message.channel.send(`Se han añadido ${value} niveles a ${mentionedMember.user.tag}`);
                } catch (err) {
                    console.log(err);
                }
            } else if (args[2] == 'remove') {
                if (!value) return message.channel.send(`El número que has escrito no es válido`);
                try {
                    await Levels.subtractLevel(mentionedMember.user.id, message.guild.id, value);
                    message.channel.send(`Se han quitado ${value} niveles de ${mentionedMember.user.tag}`);
                } catch (err) {
                    console.log(err);
                }
            } else if (args[2] == 'set') {
                if (!value) return message.channel.send(`El número que has escrito no es válido`);
                try {
                    await Levels.setLevel(mentionedMember.user.id, message.guild.id, value);
                    message.channel.send(`Se ha establecido el nivel ${value} a ${mentionedMember.user.tag}`);
                } catch (err) {
                    console.log(err);
                }
            }
        }
    },
};