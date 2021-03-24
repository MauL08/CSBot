require('dotenv').config();

const { MessageEmbed } = require('discord.js')
const PREFIX = '.'

const URL = `https://kalenderindonesia.com/api/${process.env.KI_API}`;

module.exports = {
    dictionaryCommand: function (message) {
        if(message.author.bot) return;
        if(message.content.startWith(PREFIX)) {
            const [command, ...args] = message.content
                .trim()
                .substring(PREFIX.length)
                .split(/\s+/)
            if (command === 'kamus') {
                const kamusQuery = args.join(' ');
                fetch (`${URL}/kamus/${kamusQuery}`)
                    .then(res => res.json())
                    .then(res => {
                        const emb = new MessageEmbed()
                            .setTitle(res.data.word)
                            .setDescription(res.data.description)
                            .setColor('RANDOM')
                        message.channel.send(emb);
                    })
            }
        }
    }
}