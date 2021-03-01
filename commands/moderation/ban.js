const Discord = require('discord.js');

module.exports = {
    name: "ban",
    description: "comando para banear usuarios",

    async run (bot, message, args) {
        if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("No puedes usar este comando （︶^︶）")

        const mentionMember = message.mentions.members.first();
        let reason = args.slice(1).join(" "); //b!ban <args(0) aka @member> / <args(1) aka reason>
        if (!reason) reason = "No se han dado razones ¯\_(ツ)_/¯";

        const banembed = new Discord.MessageEmbed()
        .setTitle(`Has sido baneado de **${message.guild.name}**`)
        .setDescription(`Razón: ${reason}`)
        .setColor("RANDOM")
        .setTimestamp()
        .setFooter(bot.user.tag, bot.user.displayAvatarURL())

        if (!args[0]) return message.channel.send("Tienes que mencionar un usuario para banear");

        if (!mentionMember) return message.channel.send("Este usuario no es valido / no está en el servidor");

        if (!mentionMember.bannable) return message.channel.send("No he podido banear a este usuario");

        await mentionMember.send(embed)
        await mentionMember.ban({
            reason: reason
        }).then (() => message.channel.send(mentionMember.user.tag + "ha sido baneado"));
    }
}