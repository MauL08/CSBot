const { MessageEmbed } = require('discord.js');

const PREFIX = '.';
const CMD = [
    'list',
    'jadwal',
    'ping',
    'search',
    'audio',
    'covid',
    'kamus',
    'quran',
    'hadist',
    'kalender',
    'matkul'
]

module.exports = {
    name: 'list',
    description: 'List Command',
    execute (message) {
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
                            - Sholat ( <sholat> )
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
                    value: `Kamus Besar Bahasa Indonesia (KBBI) \n
                            ===================`
                },
                {
                    name: `${CMD[7]} + <surat> <ayat>`,
                    value: `Al-Qur'an dan Terjemahan \n`
                },
                {
                    name: `${CMD[8]} + <nama> <nomorHadist>`,
                    value: `Hadist Riwayat \n
                            ===================`
                },
                {
                    name: `${CMD[9]}`,
                    value: `Kalender ( Masehi & Hijriyah ) \n
                            ===================`
                },
                {
                    name: `${CMD[10]}`,
                    value: `Nama Matkul dengan Kode Kuliah \n`
                }
            )
        message.channel.send(embedList);
    }
}