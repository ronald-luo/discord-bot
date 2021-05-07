const data = require('../data.js');

module.exports = function (msg, args) {
    msg.channel.send("~ initializing tables: scores reset to 0 ~") // sends in channel
        .then(msg => {
            msg.delete({ timeout: 5000 })
        })
        .catch(console.error);

    results = []

    for (const entity of msg.guild.members.cache) {

        id = entity[1].user.id
        username = entity[1].user.username
        results.push([0, username, id])
    }
    console.log(results)
    data.update(results) // feeds in new users to data file

    // display leaderboard
    results = data.read()
    console.log(results)

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