module.exports = {
    name: 'ready',
    once: true,

    execute(client) {
        console.log(`¡${client.user.tag} está listo! o(*￣▽￣*)ブ`);
        const arrayOfStatus = [
            `Blu | b!help`,
            `escondite con Nika o(^▽^)o`
        ];

        let index = 0;
        setInterval(() => {
            if(index === arrayOfStatus.length) index = 0;
            const status = arrayOfStatus[index];
            client.user.setActivity(status, { type: "PLAYING" }).catch(console.error)
            index++;
        }, 10000) //en ms
    }
}