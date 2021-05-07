const Discord = require('discord.js');

// random animal generator
animals = ['😺', '😸', '😹', '😻', '😼', '😽', '🙀', '😿', '😾', '🙈', '🙉', '🙊', '🐵', '🐒', '🦍', '🐶', '🐕', '🐩', '🐺', '🦊', '🦝', '🐱', '🐈', '🦁', '🐯', '🐅', '🐆', '🐴', '🐎', '🦄', '🦓', '🦌', '🐮', '🐂', '🐃', '🐄', '🐷', '🐖', '🐗', '🐽', '🐏', '🐑', '🐐', '🐪', '🐫', '🦙', '🦒', '🐘', '🦏', '🦛', '🐭', '🐁', '🐀', '🐹', '🐰', '🐇', '🐿', '🦔', '🦇', '🐻', '🐨', '🐼', '🦘', '🦡', '🐾', '🦃', '🐔', '🐓', '🐣', '🐤', '🐥', '🐦', '🐧', '🕊', '🦅', '🦆', '🦢', '🦉', '🦚', '🦜', '🐸', '🐊', '🐢', '🦎', '🐍', '🐲', '🐉', '🦕', '🦖', '🐳', '🐋', '🐬', '🐟', '🐠', '🐡', '🦈', '🐙', '🐚', '🦀', '🦞', '🦐', '🦑', '🐌', '🦋', '🐛', '🐜', '🐝', '🐞', '🦗', '🕷', '🕸', '🦂', '🦟', '🦠']

animalGen = function () {
    return random_animal = animals[Math.floor(Math.random() * animals.length)]
}

module.exports = async function (msg, args) {

    const exampleEmbed = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setAuthor('Monsieur de bébé', 'https://i.imgur.com/Cp7tBeU.png', 'https://www.ronald-luo.com/')
        // .setDescription('Try out some of our commands below!')
        .setThumbnail('https://i.imgur.com/Cp7tBeU.png')
        .addFields(
            { name: '!weather [location]', value: `${animalGen()}  get the weather anywhere :3` },
            { name: '\u200B', value: '\u200B' },
            { name: '!crypto ethereum', value: `${animalGen()}  mudstonks mudstonks` },
            { name: '\u200B', value: '\u200B' },
            { name: '!gif mudkip', value: `${animalGen()}  mudkip gifs?` },
            { name: '\u200B', value: '\u200B' },
            { name: '!daily', value: `${animalGen()}  answer questions, get points` },
            { name: '\u200B', value: '\u200B' },
            { name: '!leaderboard', value: `${animalGen()}  displays user points` },
            { name: '\u200B', value: '\u200B' },
            { name: '!init', value: `${animalGen()}  reset points to 0` },
            { name: '\u200B', value: '\u200B' },
            { name: '!kip', value: `${animalGen()}  mudkip!` },
            { name: '\u200B', value: '\u200B' },
        )
        // .setImage('https://i.imgur.com/wSTFkRM.png')
        .setTimestamp()
        .setFooter('made by ron', 'https://i.imgur.com/Cp7tBeU.png');

    msg.channel.send(exampleEmbed).then(msg => {
        msg.delete({ timeout: 15000 }) // deleted in 15 sec
    })
        .catch(console.error);
}
