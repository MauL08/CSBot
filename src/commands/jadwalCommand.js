const { MessageEmbed } = require('discord.js');
const fetch = require('node-fetch')

const Days = new Date();
const day = Days.getDate();
const month = Days.getMonth()+1 < 10 ? `0${Days.getMonth()+1}` : Days.getMonth()+1 ;
const year = Days.getFullYear();

const PREFIX = '$';

module.exports = {
    jadwalCommand: function (message) {
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
                case 'sholat':
                    fetch(
                        `https://api.banghasan.com/sholat/format/json/jadwal/kota/667/tanggal/${year}-${month}-${day}`
                    )
                        .then(res => res.json())
                        .then(res => {
                            const emb = new MessageEmbed()
                                .setTitle("Jadwal Sholat Hari Ini")
                                .setColor("#18FF00")
                                .setDescription(
                                    "========== || ========== \n "
                                )
                                .addFields(
                                    {
                                        name: "Shubuh",
                                        value: `${res.jadwal.data.subuh} WIB`,
                                    },
                                    {
                                        name: "Dzuhur",
                                        value: `${res.jadwal.data.dzuhur} WIB`,
                                    },
                                    {
                                        name: "Ashar",
                                        value: `${res.jadwal.data.ashar} WIB`,
                                    },
                                    {
                                        name: "Maghrib",
                                        value: `${res.jadwal.data.maghrib} WIB`,
                                    },
                                    {
                                        name: "Isya",
                                        value: `${res.jadwal.data.isya} WIB`,
                                    }
                                )
                                .setFooter(
                                    "============= || ============="
                                );
                            message.channel.send(emb);
                        });
                break;
            }
        }
    }}
}
