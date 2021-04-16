const fetch = require('node-fetch')

module.exports = async function (msg, args) {
    let keywords = 'Toronto'
    if (args.length > 0) {
        keywords = args.join(" ")
    }

    try {
        msg.channel.send("weather loading...")
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${keywords}&appid=${process.env.WEATHER_KEY}&units=metric`
        let response = await fetch(url)
        let json = await response.json()
        console.log(json)

        msg.channel.send({
            embed: {
                color: 3447003,
                description: `${keywords} is currently expereriencing ${json.weather[0].description}`,
                fields: [{
                    name: "Temperature",
                    value: `the temperature outside is currently **__${(json.main.temp).toFixed(2)} °C__**.`
                },
                {
                    name: "Winds",
                    value: `there are currently **__${json.wind.speed} m/s__** winds.`
                },
                {
                    name: "Clouds",
                    value: (json.clouds.all >= 50) ? "it is currently cloudy outside." : "it is currently not cloudy outside."
                }
                ],
            }
        });
    } catch (error) {
        console.log("that did not work")
        msg.channel.send("Sorry, we couldn't find that place. Check your spelling or try being more descriptive!")
    }

}
