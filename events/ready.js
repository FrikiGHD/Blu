module.exports = {
    name: 'ready',
    execute(bot) {
        console.log(`${bot.user.tag} está listo`);

        const arrayOfStatus = [
            `Blu | b!help`,
            `escondite con Nika o(^▽^)o`
        ];

        let index = 0;
        setInterval(() => {
            if(index === arrayOfStatus.length) index = 0;
            const status = arrayOfStatus[index];
            bot.user.setActivity(status, { type: "PLAYING" }).catch(console.error)
            index++;
        }, 10000) //en ms
    }
}