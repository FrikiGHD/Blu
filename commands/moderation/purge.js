const Discord = require('discord.js');

module.exports = {
    name: "purge",
    description: "Elimina los mensajes del usuario mencionado o el numero de mensajes puestos en el comando",

    async run (bot, message, args) {
        if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send('No puedes usar este comando （︶^︶）');
        if (!args[0]) return message.channel.send("Tienes que poner un número de mensajes entre el 2 y el 100 para hacer purge");
        const amountToDelete = Number(args[0], 10);
        
        if (isNaN(amountToDelete)) return message.channel.send("El número introducido no es válido");
        if (!Number.isInteger(amountToDelete)) return message.channel.send("Tienes que introducir un número entero");
        if (!amountToDelete || amountToDelete < 2 || amountToDelete >100) return message.channel.send('El número tiene que ser entre 2 y 100');
        const fetched = await message.channel.messages.fetch({
            limit: amountToDelete
        });

        try {
            await message.channel.bulkDelete(fetched)
                .then(messages => message.channel.send(`Se han eliminado ${messages.size} mensajes ~(￣▽￣)~*`).then(messages => messages.delete({timeout: 2800})));
        } catch (err) {
            console.log(err);
            message.channel.send(`No he podido eliminar los mensajes, asegurate de que no han pasado 14 dias desde que han sido enviados`);
        }
    }
}