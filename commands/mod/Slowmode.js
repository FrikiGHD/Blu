module.exports = {
    name: 'slowmode',
    description: 'Establece un slowmode en un canal',

    async run(client, message, args) {
        if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send(`No puedes utilizar este comando o(一︿一+)o`);
        if (!message.guild.me.hasPermission("MANAGE_CHANNELS")) return message.channel.send(`No tengo los permisos necesarios (ˉ▽ˉ；)...`);
    
        const value = Number(args[0]);
    
        if (!args[0]) return message.channel.send("Tienes que poner el número de duración para el slowmode")
        if (value === 0) return message.channel.setRateLimitPerUser(value);
        if (!value || value < 5 || value > 21600 ) return message.channel.send('El número tiene que ser entre 5 y 21600');
        try {
          await message.channel.setRateLimitPerUser(value);
          message.channel.send(`Se ha establecido un slowmode en el canal de ${message.channel} durante ${value} segundos`);
        } catch(err) {
          console.log(err);
          message.channel.send("No he podido poner el slowmode, lo siento... (≧﹏ ≦)");
        }
    },
};