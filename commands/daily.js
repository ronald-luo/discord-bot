const Discord = require('discord.js');
const data = require('../data')
const question_list = require('../questions')

let questions = question_list.read()

replies_good = ["ð +1 point kip kip!", "ð +1 point awesome job", "ð + 1 point mudkip used charm", "ð + 1 point mudkip uwus on you"]
replies_bad = ["ð -1 point mudkip uses bubble-beam on you", "ð -1 point got confused", "ð dababy takes 1 point away", , "ð - 1 point mudkip tackles you"]

// random animal generator
animals = ['ðļ', 'ðš', 'ðđ', 'ðŧ', 'ðž', 'ð―', 'ð', 'ðŋ', 'ðū', 'ð', 'ð', 'ð', 'ðĩ', 'ð', 'ðĶ', 'ðķ', 'ð', 'ðĐ', 'ðš', 'ðĶ', 'ðĶ', 'ðą', 'ð', 'ðĶ', 'ðŊ', 'ð', 'ð', 'ðī', 'ð', 'ðĶ', 'ðĶ', 'ðĶ', 'ðŪ', 'ð', 'ð', 'ð', 'ð·', 'ð', 'ð', 'ð―', 'ð', 'ð', 'ð', 'ðŠ', 'ðŦ', 'ðĶ', 'ðĶ', 'ð', 'ðĶ', 'ðĶ', 'ð­', 'ð', 'ð', 'ðđ', 'ð°', 'ð', 'ðŋ', 'ðĶ', 'ðĶ', 'ðŧ', 'ðĻ', 'ðž', 'ðĶ', 'ðĶĄ', 'ðū', 'ðĶ', 'ð', 'ð', 'ðĢ', 'ðĪ', 'ðĨ', 'ðĶ', 'ð§', 'ð', 'ðĶ', 'ðĶ', 'ðĶĒ', 'ðĶ', 'ðĶ', 'ðĶ', 'ðļ', 'ð', 'ðĒ', 'ðĶ', 'ð', 'ðē', 'ð', 'ðĶ', 'ðĶ', 'ðģ', 'ð', 'ðŽ', 'ð', 'ð ', 'ðĄ', 'ðĶ', 'ð', 'ð', 'ðĶ', 'ðĶ', 'ðĶ', 'ðĶ', 'ð', 'ðĶ', 'ð', 'ð', 'ð', 'ð', 'ðĶ', 'ð·', 'ðļ', 'ðĶ', 'ðĶ', 'ðĶ ']

animalGen = function () {
    return random_animal = animals[Math.floor(Math.random() * animals.length)]
}

module.exports = function (msg, args) {
    const randomIndex = Math.floor(Math.random() * questions.length)

    const exampleEmbed = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle(`Q: ${questions[randomIndex].question}`)
        .setDescription(`Topic: ${questions[randomIndex].topic}`)
        .addField(`A: ${questions[randomIndex].optionA.answer}`, `${animalGen()}`, false) //`${questions[randomIndex].optionA.result}`
        .addField(`B: ${questions[randomIndex].optionB.answer}`, `${animalGen()}`, false) //`${questions[randomIndex].optionB.result}`
        .addField(`C: ${questions[randomIndex].optionC.answer}`, `${animalGen()}`, false) //`${questions[randomIndex].optionC.result}`
        .addField(`D: ${questions[randomIndex].optionD.answer}`, `${animalGen()}`, false); //`${questions[randomIndex].optionD.result}`

    msg.channel.send(exampleEmbed)
        .then((sentEmbed) => {
            sentEmbed.react('ðĶ')
            sentEmbed.react('ð§')
            sentEmbed.react('ðĻ')
            sentEmbed.react('ðĐ')

            // Set a filter to ONLY grab these reactions & discard the reactions from the bot
            const filter = (reaction, user) => {
                return ['ðĶ', 'ð§', 'ðĻ', 'ðĐ'].includes(reaction.emoji.name) && !user.bot;
            };

            // Create the collector and use the filter from the line above
            const collector = sentEmbed.createReactionCollector(filter, {
                max: 1,
                time: 15000
            });

            collector.on('end', (collected, reason) => {
                if (reason === 'time') {
                    msg.channel.send('Ran out of time âđ...').then(msg => {
                        msg.delete({ timeout: 10000 })
                    })
                        .catch(console.error);
                } else {
                    // Grab the first reaction in the array
                    let userReaction = collected.array()[0];

                    // Grab the name of the reaction (which is the emoji itself)
                    let emoji = userReaction._emoji.name;

                    // shortening long variable names
                    first_reactor = userReaction.users.cache.array()[1]['id'] // id of the first person that reacts other than the bot
                    rightA = questions[randomIndex].optionA.result
                    rightB = questions[randomIndex].optionB.result
                    rightC = questions[randomIndex].optionC.result
                    rightD = questions[randomIndex].optionD.result

                    // random response generator
                    good_random_int = Math.floor(Math.random() * replies_good.length)
                    bad_random_int = Math.floor(Math.random() * replies_bad.length)
                    good_response = replies_good[good_random_int]
                    bad_response = replies_bad[bad_random_int]

                    // chaining replies
                    goodResult = function () {
                        msg.channel.send(good_response).then(msg => {
                            msg.delete({ timeout: 10000 })
                        })
                            .catch(console.error);
                        data.add(first_reactor)
                    }

                    badResult = function () {
                        msg.channel.send(bad_response).then(msg => {
                            msg.delete({ timeout: 10000 })
                        })
                            .catch(console.error);
                        data.remove(first_reactor)
                    }

                    // Switch Statements
                    switch (emoji) {
                        case 'ðĶ':
                            (rightA === 1) ? goodResult() : badResult()
                            break
                        case 'ð§':
                            (rightB === 1) ? goodResult() : badResult()
                            break
                        case 'ðĻ':
                            (rightC === 1) ? goodResult() : badResult()
                            break
                        case 'ðĐ':
                            (rightD === 1) ? goodResult() : badResult()
                            break

                    }

                }
            });
            sentEmbed.delete({ timeout: 30000 })
        }).catch((err) => console.log(err))
}