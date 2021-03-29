const { MessageEmbed } = require('discord.js');
const fetch = require('node-fetch');

module.exports = {
   name: 'quran',
   description: `Al-Qur'an & Terjemahan`,
   execute(message, args) {
        const URL = `https://api.quran.sutanlab.id/surah/${args[0]}/${args[1]}`

        fetch(URL)
            .then(res => res.json())
            .then(res => {
                const emb = new MessageEmbed()
                    .setTitle(`${res.data.surah.name.transliteration.id} (${res.data.surah.name.short}) -> ${args[1]} : ${args[0]}`)
                    .setColor('RANDOM')
                    .setDescription(`${res.data.surah.name.translation.en} (${res.data.surah.name.translation.id})`)
                    .addFields(
                        {
                            name: 'Arabic Text Coming Soon!',
                            value: res.data.text.transliteration.en
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