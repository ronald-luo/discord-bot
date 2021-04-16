const fetch = require('node-fetch')

let dict = {
    "bitcoin": 0,
    "ethereum": 1,
    "dogecoin": 7,
}

module.exports = async function (msg, args) {

    const url = `https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?start=1&limit=10&convert=CAD&CMC_PRO_API_KEY=${process.env.CRYPTO_KEY}`

    if (args.length > 0) {
        keywords = args.join(" ")
    }

    let response = await fetch(url);
    let json = await response.json()
    console.log(json)

    if (keywords in dict) {
        msg.channel.send({
            embed: {
                color: 3447003,
                description: `${json.data[dict[keywords]].name}: last updated ${(json.data[dict[keywords]].last_updated).slice(0, 10)} at ${(json.data[dict[keywords]].last_updated).slice(11, 16)} `,
                fields: [{
                    name: "Price",
                    value: `the current price of ${keywords} is ** __${(json.data[dict[keywords]].quote.CAD.price).toFixed(2)} CAD__ **.`
                },
                ],
            }
        });
    }

}