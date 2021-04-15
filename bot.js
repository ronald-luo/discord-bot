// Mudkip bot 1.0.0
// start bot using node bot.js
console.log("Mudkip starting")

require('dotenv').config()

const Discord = require('discord.js');
const client = new Discord.Client();
client.login(process.env.BOT_TOKEN)

client.on('ready', readyDiscord) // authentication event handler 

function readyDiscord() {
    console.log('Mudkip authenticated')
}

const commandHandler = require('./commands')

client.on('message', commandHandler) // message event handler 

