const { MessageEmbed } = require('discord.js');

const fetch = require('node-fetch')
const PREFIX = '.';

// https://covid19.mathdro.id/api/countries/indonesia

module.exports = {
    covidCommand: function (message) {
        if (message.author.bot) return;
        if (message.content.startsWith(PREFIX)) {
        const command = message.content.substring(PREFIX.length);
        if (command === 'covid') {
            fetch('https://covid19.mathdro.id/api/countries/indonesia')
                .then(res => res.json())
                .then(res => {
                    var emb = new MessageEmbed()
                        .setTitle('Covid 19 (Indonesia Scale)')
                        .setColor('#FF8300')
                        .addFields(
                            {
                                name: 'Confirmed',
                                value: `${res.confirmed.value} People`
                            },
                            {
                                name: 'Deaths',
                                value: `${res.deaths.value} People`
                            },
                            {
                                name: 'Recovered',
                                value: `${res.recovered.value} People`
                            },
                        )
                        .setFooter('Last Update : ' + res.lastUpdate.substr(0,10) + ' <-> ' + res.lastUpdate.substr(11,5) + ' WIB')
                    message.channel.send(emb);
                }
            )
        }
    }}
}