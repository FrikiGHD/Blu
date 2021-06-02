const Discord = require('discord.js');

module.exports = {
    name: "servercode",
    description: "crear un embed del link del servidor",

    async run (client, message, args) {
        if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(`No puedes utilizar este comando o(一︿一+)o`);
        if (!message.guild.me.hasPermission("MANAGE_MESSAGES")) return message.channel.send(`No tengo los permisos necesarios (ˉ▽ˉ；)...`);

        let servercode = new Discord.MessageEmbed()
        .setTitle('**CÓDIGO DEL SERVIDOR / SERVER CODE**')
        .setColor('0xE97E1F')
        .addField("🇪🇸 | Español", `Usa este enlace para invitar a gente al servidor de DBDN`)
        .addField("🇺🇸 | English", `Use this link to invite people into DBDN server`)

        await message.channel.send(servercode).then(message.channel.send("https://discord.com/invite/HxtfVBrEeE"))
    }
}