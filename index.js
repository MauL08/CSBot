require("dotenv").config();

const { Client } = require("discord.js");
const bot = new Client();

const PREFIX = '.'

const { list } = require("./commands/list");
const { audio } = require("./commands/audio");
const { covid } = require("./commands/covid");
const { jadwal } = require("./commands/jadwal");
const { ping } = require("./commands/ping");
const { search } = require("./commands/search");
const { dictionary } = require("./commands/dictionary");
const { kalender } = require('./commands/kalender');
const { quran } = require('./commands/quran');
const { hadist } = require('./commands/hadist');

// Bot Ready
bot.on("ready", () => {
    console.log(`${bot.user.username} is Online`);
});

// Bot Command
bot.on('message', (message) => {
    if(!message.content.startsWith(PREFIX) || message.author.bot) return;

    const command = message.content.substring(PREFIX.length);

    if (command === 'list') return list;
    if (command === 'audio') return audio;
    if (command === 'covid') return covid;
    if (command === 'jadwal') return jadwal;
    if (command === 'ping') return ping;
    if (command === 'search') return search;
    if (command === 'dictionary') return dictionary;
    if (command === 'kalender') return kalender;
    if (command === 'quran') return quran;
    if (command === 'hadist') return hadist;
})

// Bot Login
bot.login(process.env.TOKEN);
