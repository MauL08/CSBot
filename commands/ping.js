const { MessageEmbed } = require('discord.js');

module.exports = {
   name: 'ping',
   description: 'Ping Internet Connection',
   execute(message) {
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
        const emb = new MessageEmbed()
                .setTitle('Test Ping')
                .setColor(color)
                .addField(`Ping : ${ping} ms`, status)
        message.channel.send(emb)
   }
}