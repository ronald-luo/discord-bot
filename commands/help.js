const Discord = require('discord.js');

// random animal generator
animals = ['ðš', 'ðļ', 'ðđ', 'ðŧ', 'ðž', 'ð―', 'ð', 'ðŋ', 'ðū', 'ð', 'ð', 'ð', 'ðĩ', 'ð', 'ðĶ', 'ðķ', 'ð', 'ðĐ', 'ðš', 'ðĶ', 'ðĶ', 'ðą', 'ð', 'ðĶ', 'ðŊ', 'ð', 'ð', 'ðī', 'ð', 'ðĶ', 'ðĶ', 'ðĶ', 'ðŪ', 'ð', 'ð', 'ð', 'ð·', 'ð', 'ð', 'ð―', 'ð', 'ð', 'ð', 'ðŠ', 'ðŦ', 'ðĶ', 'ðĶ', 'ð', 'ðĶ', 'ðĶ', 'ð­', 'ð', 'ð', 'ðđ', 'ð°', 'ð', 'ðŋ', 'ðĶ', 'ðĶ', 'ðŧ', 'ðĻ', 'ðž', 'ðĶ', 'ðĶĄ', 'ðū', 'ðĶ', 'ð', 'ð', 'ðĢ', 'ðĪ', 'ðĨ', 'ðĶ', 'ð§', 'ð', 'ðĶ', 'ðĶ', 'ðĶĒ', 'ðĶ', 'ðĶ', 'ðĶ', 'ðļ', 'ð', 'ðĒ', 'ðĶ', 'ð', 'ðē', 'ð', 'ðĶ', 'ðĶ', 'ðģ', 'ð', 'ðŽ', 'ð', 'ð ', 'ðĄ', 'ðĶ', 'ð', 'ð', 'ðĶ', 'ðĶ', 'ðĶ', 'ðĶ', 'ð', 'ðĶ', 'ð', 'ð', 'ð', 'ð', 'ðĶ', 'ð·', 'ðļ', 'ðĶ', 'ðĶ', 'ðĶ ']

animalGen = function () {
    return random_animal = animals[Math.floor(Math.random() * animals.length)]
}

module.exports = async function (msg, args) {

    const exampleEmbed = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setAuthor('Monsieur de bÃĐbÃĐ', 'https://i.imgur.com/Cp7tBeU.png', 'https://www.ronald-luo.com/')
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
