require("dotenv").config();

const { Client } = require("discord.js");
const bot = new Client();
const { listCommand } = require("./src/commands/listCommand");
const { audioCommand } = require("./src/commands/audioCommand");
const { covidCommand } = require("./src/commands/covidCommand");
const { jadwalCommand } = require("./src/commands/jadwalCommand");
const { pingCommand } = require("./src/commands/pingCommand");
const { searchCommand } = require("./src/commands/searchCommand");

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
