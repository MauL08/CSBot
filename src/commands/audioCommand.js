const ytdl = require('ytdl-core');

const PREFIX = '$';
var serversQueue = {};

// var ytLink;

// const ytSearch = (message, content) => {
//     var options = {
//         url: "http://results.dogpile.com/serp?qc=video&q=" + content,
//         method: "GET",
//         headers: {
//             "Accept": "text/html",
//             "User-Agent": "Chrome"
//         }
//     };

//     request(options, (err, response, responseBody) => {
//         if (err) return;

//         $ = cheerio.load(responseBody);

//         var links = $(".video a.title");

//         var urls = new Array(links.length)
//             .fill(0)
//             .map((value, index) => links.eq(index).attr("href"));

//         if (!urls.length) return;

//         ytLink = urls[0];
//     })
    
//     return ytLink;
// }

module.exports = {
    audioCommand: function (message) {
        if (message.author.bot) return;
        if (message.content.startsWith(PREFIX)) {
        const [command, ...args] = message.content
            .trim()
            .substring(PREFIX.length)
            .split(/\s+/)
        switch(command) {
            case 'play': // Play Command

                const play = (message, connection) => {
                    var serverQueue = serversQueue[message.guild.id];

                    serverQueue.dispatcher = connection.play(
                        ytdl(serverQueue.queue[0], {filter: "audioonly"})
                    );
                    
                    serverQueue.queue.shift();

                    serverQueue.dispatcher.on('end', () => {
                        if (serverQueue.queue[0]) {
                            play(message, connection);
                        } else {
                            connection.disconnect();
                        }
                    })
                }

                if (args.length === 0) {
                    message.channel.send('Please provide valid URL')
                    return;
                }
                if (!message.member.voice.channel) {
                    message.channel.send('You must be in a Voice Channel!')
                    return;            
                }
                if (!serversQueue[message.guild.id]) {
                    serversQueue[message.guild.id] = {
                        queue: []
                    }
                }
                var serverQueue = serversQueue[message.guild.id];
                
                serverQueue.queue.push(args[0]);

                if (!message.member.voice.connection) {
                        message.member.voice.channel
                            .join()
                            .then((connection) => {
                        play(message,connection);
                    })
                }
            break;
            case 'stop': // Stop Command
                var serverQueue = serversQueue[message.guild.id];
                if (message.member.voice.connection) {
                    for (let i = 0; i < serverQueue.queue.length; i++) {
                        serverQueue.queue.splice(i, 1);
                    }
                    serverQueue.dispatch.end();
                }
                if (message.guild.voice.connection) {
                    message.guild.voice.connection.disconnect();
                    message.channel.send('Thank You for listening :)')
                }
            break;
        }
    }}
}