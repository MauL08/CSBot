const { MessageEmbed } = require('discord.js');

const PREFIX = '.';
const CMD = [
    'listcmd',
    'jadwal',
    'ping',
    'search',
    'audio',
    'covid',
    'kamus'
]

module.exports = {
    listCommand: function (message) {
        if(message.content.startsWith(PREFIX)) {
            const command = message.content.substring(PREFIX.length);
            if (command === CMD[0]) {
                const embedList = new MessageEmbed()
                    .setTitle('List Commands')
                    .setColor('#0074FF')
                    .setDescription(`- Don't forget to use .\n
                                    - Fill <...> with command, without <> \n
                                    Example :
                                    - $search image cat
                                    - $audio play www.youtube.com/? \n
                                    ===================`)
                    .addFields(
                        {
                            name: CMD[0],
                            value: `List of All Commands \n
                                    ===================`
                        },
                        {
                            name: `${CMD[1]} + <...>`,
                            value: `List Jadwal :
                                    - Kuliah ( <kuliah> )
                                    ===================`
                        },
                        {
                            name: CMD[2],
                            value: `Ping Internet Connection \n
                                    ===================`
                        },
                        {
                            name: `${CMD[3]} + <...> + <subject>`,
                            value: `Search :
                                    - Image ( <image> )
                                    - Google ( <google> )
                                    - Wikipedia ( <wiki> ) \n
                                    ===================`
                        },
                        {
                            name: `${CMD[4]} + <...>`,
                            value: `Audio :
                                    - Play Audio ( <play> + <URL> )
                                    - Stop Audio ( <stop> ) \n
                                    ===================`
                        },      
                        {
                            name: CMD[5],
                            value: `Covid Tracker (Indonesia) \n
                                    ===================`
                        },
                        {
                            name: `${CMD[6]} + <subject>`,
                            value: 'Kamus Besar Bahasa Indonesia (KBBI)'
                        },
                    )
                message.channel.send(embedList);
            }
        }
    }
}