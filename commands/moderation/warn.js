const Discord = require('discord.js');

module.exports = {
    name: "warn",
    description: "Comando para advertir a miembros por una mala conducta",

    async run(bot, message, args) {
        edited = message.content.slice(5);

        const guildID = message.guild.Discord
        const userID = message.member.id
        const Reason = args.slice(1).join(' ')
        let User = message.mentions.users.first()

        if(message.member.roles.cache.has('814171986598690857')){
            try{
                member = await message.guild.members.find(message.mentions.users.first())
            }catch(err){
                var warnEmbed = new Discord.MessageEmbed()
                .setTitle("**ADVERTENCIA**")
                .setColor('0x96210c')
                .addFields(
                    {name: 'Usuario', value: User},
                    {name: 'Razón', value: Reason},
                    {name: 'Haz lo siguiente', value: 'Lee las reglas y cumplelas o tendrás que recibir un castigo la próxima vez'},
                )
                .setTimestamp()
            }
            try{
                User.send(warnEmbed)
                message.channel.send(warnEmbed)
            }
            catch(err){
                return(message.reply('Tienes que usar el siguiente formato: <@mención> <razón>'))
            }
        }
        else{
            message.channel.send('Comando solo disponible para moderadores')
        }
    }
}