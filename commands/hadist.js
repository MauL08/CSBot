const { MessageEmbed } = require('discord.js');
const fetch = require('node-fetch');

const PREFIX = '.'

module.exports = {
    hadist: function (message) {
        if (message.author.bot) return;
        if (message.content.startsWith(PREFIX)) {
            const [command, ...args] = message.content
                .trim()
                .substring(PREFIX.length)
                .split(/\s+/)
            if (command === 'hadist') {
                const URL = `https://api.hadith.sutanlab.id/books/${args[0]}/${args[1]}`

                fetch(URL)
                    .then(res => res.json())
                    .then(res => {
                        const emb = new MessageEmbed()
                            .setTitle("Hadist")
                            .setColor('RANDOM')
                            .setDescription(`${res.data.name} : ${res.data.contents.number}`)
                            .addField(res.data.contents.arab, res.data.contents.id)     
                        message.channel.send(emb);                   
                    }
                )
            }
        }
    }
}