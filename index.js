require("dotenv").config();

const { Client, Collection } = require("discord.js");
const bot = new Client();

const PREFIX = '.'

const fs = require('fs');

bot.commands = new Collection();

// Command Files
const commandFiles = fs.readdirSync('./commands/')
                       .filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);

    bot.commands.set(command.name, command);
}

// Bot Ready
bot.on("ready", () => {
    console.log(`${bot.user.username} is Online`);
});

// Bot Command
bot.on('message', (message) => {
    if (!message.content.startsWith(PREFIX) || message.author.bot) return;

    const [command, ...args] = message.content
        .trim()
        .substring(PREFIX.length)
        .split(/\s+/);

    if (command === 'audio') {
        bot.commands.get('audio').execute(message, args)
    }

    if (command === 'covid') {
        bot.commands.get('covid').execute(message, args)
    }

    if (command === 'kamus') {
        bot.commands.get('kamus').execute(message, args)
    }

    if (command === 'jadwal') {
        bot.commands.get('jadwal').execute(message, args)
    }

    if (command === 'kalender') {
        bot.commands.get('kalender').execute(message, args)
    }

    if (command === 'matkul'){
        bot.commands.get('matkul').execute(message, args)
    }

    if (command === 'list') {
        bot.commands.get('list').execute(message, args)
    }

    if (command === 'ping') {
        bot.commands.get('ping').execute(message, args)
    }

    if (command === 'hadist') {
        bot.commands.get('hadist').execute(message, args)
    }

    if (command === 'quran') {
        bot.commands.get('quran').execute(message, args)
    }

    if (command === 'search') {
        bot.commands.get('search').execute(message, args)
    }
})

// Bot Login
bot.login(process.env.TOKEN);
