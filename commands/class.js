const { MessageEmbed } = require('discord.js');
const fetch = require('node-fetch')

module.exports ={
  nama : 'kelas',
  description : 'untuk mengetahui kelas dan nomornya',
  execute(message,args){
    const emb = new MessageEmbed()
    .setTitle("Nomor mk untuk absen") 
    .setColor('#61afef')
    .setDescription(
    "========== || ========== \n "
    )
    .addFields(
        {name : "Desain dan Analisis Algoritma",
          value : "1313600009", 
        },
        {name : "Rekayasa Perangkat Lunak",
          value : "1313600008",
        },
        { name : "Sistem Operasi",
          value : "1313600007",
        },
        { name : "Pemograman Deklaratif",
          value : "1313600006",
        }, 
        { name : "Teori Informasi",
          value : "1313600030",
        },
        { name : "Pemograman Deklaratif",
          value : "1313600006",
        },
        { name : "Organisasi Komputer",
          value : "1313600010",
        },
        { name : "Ilmu Sosial dan Budaya Dasar",
          value : "1313600010",
        },
        { name : "Metode Penelitian",
          value : "1313600010",
        },
        { name : "Grafika Komputer",
          value : "1313600010",
        },
      )

  }
} 