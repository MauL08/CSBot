require("dotenv").config();

const { Client } = require("discord.js");
const bot = new Client();
const { listCommand } = require("./commands/listCommand");
const { audioCommand } = require("./commands/audioCommand");
const { covidCommand } = require("./commands/covidCommand");
const { jadwalCommand } = require("./commands/jadwalCommand");
const { pingCommand } = require("./commands/pingCommand");
const { searchCommand } = require("./commands/searchCommand");

bot.on("ready", () => {
    console.log(`${bot.user.username} is Online`);
});

// List Command
bot.on("message", listCommand);

// Jadwal Command
bot.on("message", jadwalCommand);

// Ping Command
bot.on("message", pingCommand);

// Search Command
bot.on("message", searchCommand);

// Audio Command
bot.on("message", audioCommand);

// Covid Command
bot.on("message", covidCommand);

bot.login(process.env.TOKEN);
