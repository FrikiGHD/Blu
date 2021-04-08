const Discord = require('discord.js');

module.exports = {
    name: "simp",
    description: "calcular tu nivel de simp",

    async run (bot, message, args) {
        let member = message.mentions.users.first() || message.author

        let rng = Math.floor(Math.random() * 101);

        const simpembed = new Discord.MessageEmbed()
        .setTitle(`Nivel de simp`)
        .setDescription(`${member.username} es ` + rng + "% Simp (￣y▽￣)╭")
        .setColor("RED")

        message.channel.send(simpembed)
    }
}