replies = ["mudkip mudkip!", "what do you want", "huh?"]

module.exports = function (msg, args) {
    const randomIndex = Math.floor(Math.random() * replies.length)
    msg.channel.send(replies[randomIndex]) // sends in channel
}
