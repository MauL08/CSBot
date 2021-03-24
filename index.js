require("dotenv").config();

const { Client } = require("discord.js");
const bot = new Client();

const { list } = require("./commands/list");
const { audio } = require("./commands/audio");
const { covid } = require("./commands/covid");
const { jadwal } = require("./commands/jadwal");
const { ping } = require("./commands/ping");
const { search } = require("./commands/search");
const { dictionary } = require("./commands/dictionary");

// Bot Ready
bot.on("ready", () => {
    console.log(`${bot.user.username} is Online`);
});

// List Command
bot.on("message", list);

// Jadwal Command
bot.on("message", jadwal);

// Ping Command
bot.on("message", ping);

// Search Command
bot.on("message", search);

// Audio Command
bot.on("message", audio);

// Covid Command
bot.on("message", covid);

// Dictionary Command
bot.on("message", dictionary);

// Bot Login
bot.login(process.env.TOKEN);
