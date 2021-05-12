module.exports = {
    name: 'say',
    description: 'Blu escribirá lo que digas',

    async run(client, message, args) {
        if (!message.member.hasPermission("MANAGE_MESSAGES")) return;
        let msg;
        let textChannel = message.mentions.channels.first()
        message.delete()

        if(textChannel) {
            msg = args.slice(1).join(" ");
            textChannel.send(msg)
        } else {
            msg = args.join(" ");
            message.channel.send(msg)
        }
    },
};