const { MessageEmbed } = require('discord.js');

const PREFIX = '.';

module.exports = {
    ping: function (message) {
        if(message.author.bot) return;
        if(message.content.startsWith(PREFIX)) {
            const command = message.content.substring(PREFIX.length);
            const ping = Date.now() - message.createdTimestamp;
            var status, color;
            if (ping < 50) {
                status = 'Good Connection, Keep it Up!'
                color = '#00FF00'
            }
            else if (ping > 30 && ping < 200) {
                status = 'Medium Connection!'
                color = '#FFFF00'
            }
            else if (ping > 200) {
                status = 'Bad Connection!'
                color = '#FF0000'
            }
            if (command === 'ping') {
                const emb = new MessageEmbed()
                    .setTitle('Test Ping')
                    .setColor(color)
                    .addField(`Ping : ${ping} ms`, status)
                message.channel.send(emb)
            }
        }
    }
}