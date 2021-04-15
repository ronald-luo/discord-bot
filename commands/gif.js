const fetch = require("node-fetch")

module.exports = async function (msg, args) {
    let keywords = 'Pepe Frog'
    if (args.length > 0) {
        keywords = args.join(" ")
    }

    msg.channel.send("gif loading...")
    let url = `https://g.tenor.com/v1/search?q=${keywords}&key=${process.env.TENOR_KEY}&limit=8`
    let response = await fetch(url); // people are using axios now but node-fetch is good too
    let json = await response.json()

    let index = Math.floor(Math.random() * json.results.length)
    msg.channel.send(json.results[index].url)
    msg.channel.send("GIF from Tenor: " + keywords)
}