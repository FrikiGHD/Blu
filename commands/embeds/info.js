const Discord = require('discord.js');

module.exports = {
    name: "info",
    description: "crear un embed de información",

    async run (client, message, args) {
        if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(`No puedes utilizar este comando o(一︿一+)o`);
        if (!message.guild.me.hasPermission("MANAGE_MESSAGES")) return message.channel.send(`No tengo los permisos necesarios (ˉ▽ˉ；)...`);

        let infoes = new Discord.MessageEmbed()
        .setAuthor('Laraartss', 'https://i.imgur.com/W8Xsaex.jpg')
        .setTitle('**INFORMACIÓN DE DBDN**')
        .setThumbnail('https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/emoji-one/5/flag-for-spain_1f1ea-1f1f8.png')
        .setColor('0xA2AAB3')
        .addField('**·** __¿De qué trata el servidor?__', 'Este es el servidor oficial de Dragón Blanco Dragón Negro (DBDN), historia creada por Laraartss. Aquí podrás enterarte del progreso o notícias acerca del proyecto además de interactuar con la comunidad y hablar o compartir intereses.')
        .addField('**·** __Información sobre el libro__', 'Dragón Blanco Dragón Negro saldrá al público el día 25 de Julio de 2021 y podrá comprarse en la plataforma Blurb, tanto en formato digital como físico. Más adelante se publicará información para conseguirlo de manera sencilla.')
        .addField('**·** __Sinopsis__', `”Hace mucho tiempo, los cuatro reinos vivían en armonía y todo se encontraba  en perfecto equilibrio en Ikram, hasta que Caranthir, rey del Fuego, rompió el pacto que miles de años atrás se había sellado. Egoístamente, decidió que merecía todo el poder de los cuatro elementos, entrando en guerra con los demás reinos. \n Dos de ellos desaparecieron, destrozados por la guerra, escondiéndose en las sombras. Y ahora, sólo uno de ellos, el Reino de la Luz, le planta cara al enemigo. \n Pero esto cambiará gracias a una poderosa amistad que se forma entre una joven ikrana de la luz y un dragón, que lucharan en esta guerra para frenar el avance inminente del Reino del Fuego”`)

        let infoen = new Discord.MessageEmbed()
        .setAuthor('Laraartss', 'https://i.imgur.com/W8Xsaex.jpg')
        .setTitle('**DBDN INFORMATION**')
        .setThumbnail('https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/twitter/281/flag-united-states_1f1fa-1f1f8.png')
        .setColor('0xA2AAB3')
        .addField(`**·** __¿What's the server about?__`, `This is the official server of White Dragon Black Dragon (Dragón Blanco Dragón Negro / DBDN), story created by Laraartss. Here you can see the progress and news about the project as well as interact with the community and talk or share interests.`)
        .addField(`**·** __Information about the book__`, `White Dragon Black Dragon will be released on July 25, 2021 and can be purchased on the Blurb platform, both digitally and physically. Information will be provided later on how to get it easily.`)
        .addField(`**·** __Synopsis__`, `"Long ago, the four kingdoms lived in harmony and everything was in perfect balance in Ikram, until Caranthir, the Fire King, broke the pact that had been sealed thousands of years ago. Selfishly, he decided that he deserved all the power of the four elements, starting a war with the other kingdoms. \n Two of them disappeared, destroyed by the war, hiding in the shadows. And now, only one of them, the Light Kingdom, stands up to the enemy. \n But this will change thanks to a powerful friendship formed between a young ikran of light and a dragon, who will fight in this war to stop the imminent advance of the Fire Kingdom"`)

        await message.channel.send(infoes).then(message.channel.send(infoen))
    }
}