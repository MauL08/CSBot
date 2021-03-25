require('dotenv').config();

const { MessageEmbed } = require('discord.js');
const fetch = require('node-fetch');

const URL = `https://kalenderindonesia.com/api/${process.env.KI_API}`;

function removeTags(str) {
    if ((str===null) || (str==='')) return false;
    
    str = str.toString();
    
    return str.replace( /(<([^>]+)>)/ig, '');
}

module.exports = {
    name: 'kamus',
    description: 'Kamus Besar Bahasa Indonesia',
    execute(message, args) {
        const kamusQuery = args.join(' ');
        fetch (`${URL}/kamus/${kamusQuery}`)
            .then(res => res.json())
            .then(res => {
                const emb = new MessageEmbed()
                    .setTitle(res.data.word)
                    .setDescription(removeTags(res.data.description))
                    .setColor('RANDOM')
                message.channel.send(emb);
            }
        )
    }
}