players = [
    [0, "John Doe", "abcdefg12345"],
    [0, "Jane Smith", "abcdefg123456"],
    [0, "Sam Jane", "abcdefg123457"],
]

module.exports = {
    read: function () {
        return players
    },

    update: function (arr) {
        players = arr
    },

    add: function (id) {
        for (i = 0; i < players.length; i++) {
            if (players[i][2] === id) {
                console.log("true")
                players[i][0] += 1;
            } else {
                players[i][0] += 0;
            }
        }
    },

    remove: function (id) {
        for (i = 0; i < players.length; i++) {
            if (players[i][2] === id) {
                console.log("true")
                players[i][0] -= 1;
            } else {
                players[i][0] += 0;
            }
        }
    }


}

