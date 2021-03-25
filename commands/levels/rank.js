const Discord = require('discord.js');
const Canvas = require('canvas');
const Levels = require('discord-xp');

module.exports = {
    name: 'rango',
    description: 'Muestra un canva del rango del usuario',
    async run (bot, message, args) {
    
    let mentionedMember = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        if (!mentionedMember) mentionedMember = message.member;

     const target = await Levels.fetch(mentionedMember.user.id, message.guild.id);
        if (!target) return message.channel.send('El miembro no tiene ningún nivel establecido o(゜ヘ゜o)');
    let level = target.level;
    let xpObjectif = Levels.xpFor(target.level + 1);
    let xp = target.xp;
    let xpBarre = (xpObjectif - xp) / xpObjectif * 490;

    const member = message.mentions.members.last() || message.member;

    const canvas = Canvas.createCanvas(800, 300);
    const ctx = canvas.getContext('2d');

    const background = await Canvas.loadImage('https://i.imgur.com/EuUxMio.png');
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

    ctx.strokeStyle = '#fff';
    ctx.strokeRect(0, 0, canvas.width, canvas.height);

    ctx.font = '40px Bahnschrift';
    ctx.fillStyle = '#edab58';
    ctx.fillText(`${member.user.tag}`, 225, 120);
    ctx.fillText(`Nivel : ${level}`, 630, 50)

    ctx.beginPath();
    ctx.lineWidth = 5;
    ctx.fillStyle = "#fff";
    ctx.moveTo(220, 135);
    ctx.lineTo(690, 135);
    ctx.quadraticCurveTo(710, 135, 710, 152.5);  
    ctx.quadraticCurveTo(710, 170, 690, 170);
    ctx.lineTo(220, 170);
    ctx.lineTo(220, 135);
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.fillStyle = "#579AD9";
    ctx.moveTo(220, 135);
    ctx.lineTo(220 + xpBarre-20, 135);
    ctx.quadraticCurveTo(220 + xpBarre, 135, 220 + xpBarre, 152.5); 
    ctx.quadraticCurveTo(220 + xpBarre, 170, 220 + xpBarre-20, 170); 
    ctx.lineTo(220, 170);
    ctx.lineTo(220, 135);
    ctx.fill();
    ctx.font = "28px Impact";
    ctx.fillStyle = "#000";
    ctx.fillText(`${xp} / ${xpObjectif} XP`, 230, 162)
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(125, 150, 100, 0, Math.PI * 2, true);
    ctx.closePath();
	ctx.clip();

	const avatar = await Canvas.loadImage(member.user.displayAvatarURL({ format: 'png' }));
	ctx.drawImage(avatar, 25, 50, 200, 200);

    const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'https://i.imgur.com/EuUxMio.png');

    message.channel.send(attachment);
    }
}