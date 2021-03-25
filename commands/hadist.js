const { MessageEmbed } = require('discord.js');
const fetch = require('node-fetch');

module.exports = {
    name: 'hadist',
    description: 'Hadist Riwayat',
    execute(message, args) {
        const URL = `https://api.hadith.sutanlab.id/books/${args[0]}/${args[1]}`
        fetch(URL)
            .then(res => res.json())
            .then(res => {
                const emb = new MessageEmbed()
                    .setTitle("Hadist")
                    .setColor('RANDOM')
                    .setDescription(`${res.data.name} : ${res.data.contents.number}`)
                    .addFields(
                        {
                            name: 'Arabic Text Coming Soon!',
                            value: res.data.contents.id
                        }
                    )     
                message.channel.send(emb);                   
            }
        )
    }
}