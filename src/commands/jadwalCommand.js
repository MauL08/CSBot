const { MessageEmbed } = require('discord.js');

const PREFIX = '$';

module.exports = {
    jadwalCommand: function (message) {
        if(message.author.bot) return;
        if(message.content.startsWith(PREFIX)){
        const command = message.content.substring(PREFIX.length);
        if (command === 'jadwal') {
            const emb = new MessageEmbed()
                .setTitle("Jadwal Kuliah (Semester 114)")
                .setColor('#18FF00')
                .setDescription('================= || =================')
                .addFields(
                    {
                        name: "Senin",
                        value: '11.00 - 13.00 --> Rekayasa Perangkat Lunak \n'
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
                        value: `07.30 - 10.00 --> Organisasi Komputer \n
                        10.00 - 12.30 --> Pemrograman Deklaratif \n
                        13.00 - 15.30 --> Komputer Grafika \n`

                    },
                    {
                        name: 'Jumat',
                        value: '09.00 - 10.30 --> Metode Penelitian'
                    },
                )
                .setFooter('==================== || ====================')
            message.channel.send(emb);
        }
    }}
}