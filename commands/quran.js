const { MessageEmbed } = require('discord.js');
const fetch = require('node-fetch');

const PREFIX = '.'

module.exports = {
    quran: function (message) {
        if (message.author.bot) return;
        if (message.content.startsWith(PREFIX)) {
            const [command, ...args] = message.content
                .trim()
                .substring(PREFIX.length)
                .split(/\s+/)
            if (command === 'quran') {
                const URL = `https://api.quran.sutanlab.id/${args[0]}/${args[1]}`

                fetch(URL)
                    .then(res => res.json())
                    .then(res => {
                        const emb = new MessageEmbed()
                            .setTitle(`${res.data.surah.name.transliteration.id} (${res.data.surah.name.short}) -> ${args[0]}:${args[1]}`)
                            .setColor('RANDOM')
                            .setDescription(`${res.data.surah.name.translation.en} (${res.data.surah.name.translation.id})`)
                            .addFields(
                                {
                                    name: res.data.text.arab,
                                    value: res.data.text.transliteration
                                },
                                {
                                    name: 'Translation (EN)',
                                    value: res.data.translation.en
                                },
                                {
                                    name: 'Translation (ID)',
                                    value: res.data.translation.id
                                },
                            )
                        message.channel.send(emb);
                    }
                )
            }
        }
    }
}