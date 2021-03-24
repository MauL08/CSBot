const { MessageEmbed } = require('discord.js');

const PREFIX = '.';

module.exports = {
    jadwal: function (message) {
        if(message.author.bot) return;
        if(message.content.startsWith(PREFIX)){
            const [command, ...args] = message.content
            .trim()
            .substring(PREFIX.length)
            .split(/\s+/)
        if (command === 'jadwal') {
            switch(args[0]) {
                case 'kuliah':
                    const emb = new MessageEmbed()
                    .setTitle("Jadwal Kuliah (Semester 114)")
                    .setColor('#18FF00')
                    .setDescription('========== || ==========')
                    .addFields(
                        {
                            name: "Senin",
                            value: `11.00 - 13.00 --> Rekayasa Perangkat Lunak \n
                                    13.00 - 15.00 --> Ilmu Sosial Budaya Dasar \n
                                    15.30 - 17.00 --> Organisasi Komputer`
                        },
                        {
                            name: "Selasa",
                            value: '07.30 - 10.00 --> Teori Informasi \n'
                        },
                        {
                            name: 'Rabu',
                            value: `07.30 - 10.00 --> Sistem Operasi \n
                                    10.00 - 12.30 --> Desain Analisis Algoritma \n` 
                        },
                        {
                            name: 'Kamis',
                            value: `10.00 - 12.30 --> Pemrograman Deklaratif \n
                                    13.00 - 15.30 --> Komputer Grafika \n`

                        },
                        {
                            name: 'Jumat',
                            value: '09.00 - 10.30 --> Metode Penelitian'
                        },
                    )
                    .setFooter('============= || =============')
                    message.channel.send(emb);
                break;
            }
        }
    }}
}
