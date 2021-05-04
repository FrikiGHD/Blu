const Discord = require('discord.js');

module.exports = {
    name: 'purge',
    description: 'Elimina el numero de mensajes que quieras al usar el comando',

    async run(client, message, args) {
        if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(`No puedes utilizar este comando o(一︿一+)o`);
        if (!message.guild.me.hasPermission("MANAGE_MESSAGES")) return message.channel.send(`No tengo los permisos necesarios (ˉ▽ˉ；)...`);
        if (!args[0]) return message.channel.send("Tienes que poner el número de mensajes que quieres eliminar");
        const amountToDelete = Number(args[0], 10);
    
        if(isNaN(amountToDelete)) return message.channel.send('No has escrito un número válido');
        if(!Number.isInteger(amountToDelete)) return message.channel.send("Tienes que escribir un número entero");
        if (!amountToDelete || amountToDelete < 2 || amountToDelete > 100) return message.channel.send('El número tiene que ser entre 2 y 100');
        const fetched = await message.channel.messages.fetch({
          limit: amountToDelete + 1
        });

        const notPinned = fetched.filter(fetchedMsg => !fetchedMsg.pinned);

        try {
          await message.channel.bulkDelete(notPinned, true)
            .then(messages => message.channel.send(`Se han eliminado ${messages.size - 1} mensajes `).then(messages => messages.delete({timeout: 2800})));
        } catch(err) {
          console.log(err)
          message.channel.send("No he podido eliminar los mensajes, lo siento... (≧﹏ ≦)");
          message.channel.send("Asegurate de que los mensajes no sean de hace 14 días o más");
        }
    },
};