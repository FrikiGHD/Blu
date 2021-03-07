const Discord = require('discord.js');


module.exports = {
    name: "social",
    description: "Redes sociales de Laraartss",

    async run (bot, message, args) {
        
        const instagramEmbed  = new Discord.MessageEmbed()
        .setTitle('Laraartss |Instagram|')
        .setURL('https://www.instagram.com/laraartss_/')
        .setThumbnail('https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/1200px-Instagram_logo_2016.svg.png')
        .setColor('#A83457')
        .addField('Instagram oficial de Laraartss_', 'Sígueme en instagram para tener noticias frescas sobre mis proyectos más recientes y demás dibujos')
        .setTimestamp()
        .setFooter('laraartss_', 'https://instagram.fbcn11-1.fna.fbcdn.net/v/t51.2885-19/s150x150/83171566_1295921243927326_240940097573224448_n.jpg?_nc_ht=instagram.fbcn11-1.fna.fbcdn.net&_nc_ohc=T7jR_2nnuP4AX-XLNUs&tp=1&oh=a9d7aff232397e03785a9be724558460&oe=606072FF');
     
        const wattpadEmbed  = new Discord.MessageEmbed()
        .setTitle('Laraartss |Wattpad|')
        .setURL('https://www.wattpad.com/user/laraartss')
        .setThumbnail('https://theme.zdassets.com/theme_assets/58997/7405ca8aea3281b272a0f6684342f8e34415aee7.png')
        .setColor('#D16E16')
        .addField('Wattpad oficial de Laraartss_', 'Sígueme para leer mis libros e historias que subo en esta plataforma')
        .setTimestamp()
        .setFooter('laraartss', 'https://img.wattpad.com/useravatar/laraartss.128.1831.jpg');

        await message.channel.send(instagramEmbed)
        await message.channel.send(wattpadEmbed)
    }
}