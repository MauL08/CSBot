const { MessageEmbed } = require('discord.js');

const PREFIX = '$';
const CMD = [
    'listcmd',
    'jadwal',
    'ping',
    'img',
    'google',
    'wiki',
    'play',
    'stop',
    'covid'
]

module.exports = {
    listCommand: function (message) {
        if(message.content.startsWith(PREFIX)) {
            const command = message.content.substring(PREFIX.length);
            if (command === CMD[0]) {
                const embedList = new MessageEmbed()
                    .setTitle('List Commands')
                    .setColor('#0074FF')
                    .setDescription(`Don't forget to use $\n
                    ==========================`)
                    .addFields(
                        {
                            name: CMD[0],
                            value: 'List of All Commands'
                        },
                        {
                            name: CMD[1],
                            value: 'List Jadwal Kuliah'
                        },
                        {
                            name: CMD[2],
                            value: `Ping Internet Connection \n
                            ==========================`
                        },
                        {
                            name: CMD[3],
                            value: `Image Search Engine \n`
                        },
                        {
                            name: CMD[4],
                            value: `Google Search Engine \n`
                        },
                        {
                            name: CMD[5],
                            value: `Wikipedia Search Engine \n
                            ==========================`
                        },
                        {
                            name: CMD[6],
                            value: 'Play Audio from URL'
                        },
                        {
                            name: CMD[7],
                            value: `Stop Audio from URL \n
                            ==========================`
                        },
                        {
                            name: CMD[8],
                            value: 'Covid Tracker (Indonesia)'
                        },
                    )
                message.channel.send(embedList);
            }
        }
    }
}