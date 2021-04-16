const Discord = require('discord.js');

module.exports = {
    name: "servercode",
    description: "crear un embed del link del servidor",

    async run (bot, message, args) {

        if (!message.member.roles.cache.has('814171986598690857')) return message.channel.send("No puedes usar este comando （︶^︶）");

        let servercode = new Discord.MessageEmbed()
        .setTitle('**CÓDIGO DEL SERVIDOR / SERVER CODE**')
        .setColor('0xE97E1F')
        .addField("🇪🇸 | Español", `Usa este enlace para invitar a gente al servidor de DBDN`)
        .addField("🇺🇸 | English", `Use this link to invite people into DBDN server`)

        await message.channel.send(servercode).then(message.channel.send("https://discord.gg/GyREVDhVX7"))
    }
}