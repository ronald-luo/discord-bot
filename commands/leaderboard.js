const data = require('../data.js');

module.exports = function (msg, args) {

    // warning user to use !init first
    msg.channel.send("~ try using !init if you don't see your name on the board ~")
        .then(msg => {
            msg.delete({ timeout: 5000 }) // remove message after 5s
        })
        .catch(console.error);

    results = data.read()
    console.log(results)

    // sorts leaderboard large to small
    results = results.sort((a, b) => { return b[0] - a[0] })

    joe = []

    for (i = 0; i < results.length; i++) {
        joe.push({
            name: `${i + 1}.  ` + results[i][1], // username
            value: results[i][0], // points
        })
    }

    // Embed template sent to channel
    const exampleEmbed = {
        color: 0x0099ff,
        title: 'Discord Quiz Bot',
        url: 'https://github.com/ronald-luo',
        author: {
            name: 'Ronald Luo',
            icon_url: 'https://i.imgur.com/Cp7tBeU.png',
            url: 'https://github.com/ronald-luo',
        },
        description: 'Bot for RU Hacks 2021',
        thumbnail: {
            url: 'https://i.imgur.com/Cp7tBeU.png',
        },
        fields: joe,
        timestamp: new Date(),
        footer: {
            text: 'anson and ron | RU Hacks 2021',
            icon_url: 'https://i.imgur.com/Cp7tBeU.png',
        },
    };

    // send embed
    msg.channel.send({ embed: exampleEmbed }).then(msg => {
        msg.delete({ timeout: 20000 }) // remove message after 20s
    })
        .catch(console.error);
}