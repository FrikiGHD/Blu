const Discord = require('discord.js');

module.exports = {
    name: "ppt",
    description: "Piedra, Papel y Tijeras",

    async run (bot, message, args) {
        let embed = new Discord.MessageEmbed()
        .setTitle("Piedra, Papel, Tijeras")
        .setDescription("¡Reacciona para jugar!")
        .setTimestamp()
        let msg = await message.channel.send(embed)
        await msg.react("🗻")
        await msg.react("📄")
        await msg.react("✂")

        const filter = (reaction, user) => {
            return ["🗻", "📄", "✂"].includes(reaction.emoji.name) && user.id === message.author.id;
        }

        const choices = ["🗻", "📄", "✂"]
        const me = choices[Math.floor(Math.random() * choices.length)]
        msg.awaitReactions(filter, {max: 1, time: 60000, error: ["time"]}).then(
            async(collected) => {
                const reaction = collected.first()
                let result = new Discord.MessageEmbed()
                .setTitle("Resultado")
                .addField("Tu elección", `${reaction.emoji.name}`)
                .addField("Mi elección", `${me}`)
                await msg.edit(result)

                if((me === "🗻" && reaction.emoji.name === "✂") ||
                (me === "✂" && reaction.emoji.name === "📄") ||
                (me === "📄" && reaction.emoji.name === "🗻")) {
                    message.reply("Has perdido ( •̀ ω •́ )✧");
                } else if (me === reaction.emoji.name) {
                    return message.reply("¡Empate! ㄟ(≧◇≦)ㄏ");
                } else {
                    return message.reply("Has ganado （︶^︶）");
                }
            })
            .catch(collected => {
                message.reply('Has tardado demasiado en responder o(TヘTo)');
            })
    }
}