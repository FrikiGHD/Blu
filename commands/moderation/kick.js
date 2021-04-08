const Discord = require('discord.js');

module.exports = {
    name: "kick",
    description: "comando para expulsar usuarios",

    async run (bot, message, args) {
        if (!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("No puedes usar este comando （︶^︶）")

        const mentionMember = message.mentions.members.first();
        let reason = args.slice(1).join(" "); //b!kick <args(0) aka @member> / <args(1) aka reason>
        if (!reason) reason = "No se han dado razones ¯\_(ツ)_/¯";

        const kickembed = new Discord.MessageEmbed()
        .setTitle(`Has sido expulsado de **${message.guild.name}**`)
        .setDescription(`Razón: ${reason}`)
        .setColor("RANDOM")
        .setTimestamp()
        .setFooter(bot.user.tag, bot.user.displayAvatarURL())

        if (!args[0]) return message.channel.send("Tienes que mencionar un usuario para expulsar");

        if (!mentionMember) return message.channel.send("Este usuario no es valido / no está en el servidor");

        if (!mentionMember.kickable) return message.channel.send("No he podido expulsar a este usuario");

        try {
            await mentionMember.send(kickembed);
        } catch (err) {

        }

        try {
            await mentionMember.kick(reason);
        } catch (err) {
            return message.channel.send("No he podido expulsar a este usuario, lo siento... (≧﹏ ≦)")
        }
    }
}