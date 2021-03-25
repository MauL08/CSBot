const { MessageEmbed } = require('discord.js');
const fetch = require('node-fetch');

const Days = new Date();
const day = Days.getDate();
const month = Days.getMonth() + 1;

const URL = 'https://kalenderindonesia.com/api/APIfv6tSTpYOl/kalender/masehi/2021'

module.exports = {
   name: 'kalender',
   description: 'Kalender Masehi & Hijriyah',
   execute(message) {
            fetch(URL)
            .then(res => res.json())
            .then(res => {
                const emb = new MessageEmbed()
                    .setTitle('Kalender 2021')
                    .setColor('RANDOM')
                    .addFields(
                        {
                            name: 'Kalender Masehi',
                            value: `${res.data.monthly[month].daily[day].text.W}, 
                                    ${res.data.monthly[month].daily[day].text.M}`
                        },
                        {
                            name: 'Kalender Hijriyah',
                            value: `${res.data.monthly[month].daily[day].text.W}, 
                                    ${res.data.monthly[month].daily[day].text.H}`
                        }
                    )
                message.channel.send(emb);
            }
        )
    }
}