const ytdl = require('ytdl-core');

const PREFIX = '.';
var serversQueue = {};

module.exports = {
    audioCommand: function (message) {
        if (message.author.bot) return;
        if (message.content.startsWith(PREFIX)) {
        const [command, ...args] = message.content
            .trim()
            .substring(PREFIX.length)
            .split(/\s+/)
        if (command === 'audio') {
            switch(args[0]) {
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
    
                    if (args[1] === '') {
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
                    
                    serverQueue.queue.push(args[1]);
    
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
        }
    }}
}