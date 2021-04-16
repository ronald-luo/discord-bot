const gif = require('./commands/gif');
const kip = require('./commands/kip');
const weather = require('./commands/weather');
const crypto = require('./commands/crypto');

const commands = { crypto, weather, kip, gif }

module.exports = async function (msg) {
    let tokens = msg.content.split(' ')
    let command = tokens.shift()
    if (command.charAt(0) === '!') {
        command = command.substring(1)
        commands[command](msg, tokens)
    }
}

