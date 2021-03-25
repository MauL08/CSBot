const { MessageEmbed } = require('discord.js');
const fetch = require('node-fetch');

const PREFIX = '.'

const Days = new Date();
const day = Days.getDate();
const month = Days.getMonth() + 1;

const URL = 'https://kalenderindonesia.com/api/APIfv6tSTpYOl/kalender/masehi/2021'

module.exports = {
    kalender: function (message) {
        if (message.author.bot) return;
        if (message.content.startsWith(PREFIX)) {
            const [command, ...args] = message.content
                .trim()
                .substring(PREFIX.length)
                .split(/\s+/)
            if (command === 'kalender') {
                fetch(URL)
                    .then(res => res.json())
                    .then(res => {
                        const emb = new MessageEmbed()
                            .setTitle('Kalender 2021')
                            .setColor('RANDOM')
                            .addFields(
                                {
                                    name: 'Kalender Masehi',
                                    value: `${res.data.monthly[month].daily[day + 4].text.W}, 
                                            ${res.data.monthly[month].daily[day + 4].text.M}`
                                },
                                {
                                    name: 'Kalender Hijriyah',
                                    value: `${res.data.monthly[month].daily[day + 4].text.W}, 
                                            ${res.data.monthly[month].daily[day + 4].text.H}`
                                }
                            )
                        message.channel.send(emb);
                    }
                )
            }
        }
    }
}