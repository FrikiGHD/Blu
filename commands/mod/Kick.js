const Discord = require('discord.js');

module.exports = {
    name: 'kick',
    description: 'Kickea al usuario mencionado',

    async run(client, message, args) {
        if (!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send(`No puedes utilizar este comando o(一︿一+)o`);
        
        const mentionedMember = message.mentions.members.first();
        let reason = args.slice(1).join(" ");
        if (!reason) reason = "Tienes que mencionar al menos una razón de uso del comando kick";
        const kickembed = new Discord.MessageEmbed()
          .setTitle(`Has sido expulsado de **${message.guild.name}**`)
          .setDescription(`Razón: ${reason}`)
          .setColor("0xB92424")
          .setTimestamp()
          .setFooter(client.user.tag, client.user.displayAvatarURL());
    
          if (!args[0]) return message.channel.send("Tienes que mencionar un usuario para expulsar");
          if (!mentionedMember) return message.channel.send("Este usuario no es valido / no está en el servidor");
          try {
            await mentionedMember.send(kickembed);
          } catch (err) {
            console.log("No he podido expulsar al usuario mencionado");
          }
    
          try {
            await mentionedMember.kick(reason);
          } catch (err) {
            console.log(err);
            return message.channel.send("No he podido expulsar a este usuario, lo siento... (≧﹏ ≦)")
          }
    },
};