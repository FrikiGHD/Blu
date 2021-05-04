const Discord = require('discord.js');

module.exports = {
    name: 'unmute',
    description: 'Des-silencia a la persona mencionada',

    async run(client, message, args) {
        if (!message.member.hasPermission("MUTE_MEMBERS")) return message.channel.send("No puedes usar este comando （︶^︶）");
        if (!message.guild.me.hasPermission("MANAGE_ROLES")) return message.channel.send("Necesito el permiso de \`MANAGE_ROLES\` para mutear a alguien");
    
        const muteRole = message.guild.roles.cache.get('822113265031053363');
        const memberRole = message.guild.roles.cache.get('814172722627608636');
        const mentionedMember = message.mentions.members.first();
        const unmuteEmbed = new Discord.MessageEmbed()
        .setTitle(`Has sido desmuteado de **${message.guild.name}**`)
        .setColor("RANDOM")
        .setFooter(client.user.tag, client.user.displayAvatarURL())
        .setTimestamp();
    
        if (!args[0]) return message.channel.send(`\`b!unmute @Miembro (razón)\``);
        if (!mentionedMember) return message.channel.send('El miembro mencionado no está en el servidor');
        if (mentionedMember.user.id == message.author.id) return message.channel.send('No puedes mutearte a tí mismo');
        if (mentionedMember.user.id == client.user.id) return message.channel.send('No puedes mutearme o(≧口≦)o')
        if (mentionedMember.roles.cache.has(memberRole.id)) return message.channel.send('Este miembro ya está desmuteado');
        if (message.member.roles.highest.position <= mentionedMember.roles.highest.position) return message.channel.send('No puedes desmutear a alguien por encima de tí');
    
        await mentionedMember.send(unmuteEmbed).catch(err => console.log(err));
        await mentionedMember.roles.add(memberRole.id).catch(err => console.log(err).then(message.channel.send('Ha habido un problema al intentar dar el rol de miembro')));
        await mentionedMember.roles.remove(muteRole.id).catch(err => console.log(err).then(message.channel.send('Ha habido un problema al intentar quitar el rol de muteado')));
    },
};