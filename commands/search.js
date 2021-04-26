require('dotenv').config();

const { MessageEmbed } = require('discord.js')
const Scraper = require('images-scraper');
const fetch = require('node-fetch')

const google = new Scraper({
        puppeteer: {
            headless: true,
            args: ["--no-sandbox"]
        }
    }
)

module.exports = {
    name: 'search',
    description: 'Search Engine',
    execute(message, args) {
        switch(args[0]) {
            case 'image':
                (async () => {
                    args.splice(0,1);
                    const imageQueue = args.join(' ');
                    const imgRes = await google.scrape(imageQueue, process.env.IMAGE_RANGE);
                    message.channel.send(imgRes[Math.floor(Math.random() * imgRes.length)].url)
                })();
            break;
            case 'wiki':
                args.splice(0,1);
                (async () => {
                    let response;

                    const subWiki = args.join(' ');
                    if (!subWiki) message.channel.send('Please type the correct Subject.')
                    
                    const url = `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(subWiki)}`

                    try {
                        response = await fetch(url).then(res => res.json())
                    }      
                    catch (e) {
                        return message.channel.send('An Error Occured, Try Again.')
                    }

                    try {
                        if(response.type === 'disambiguation') {
                            const embed = new MessageEmbed()
                                .setColor('RANDOM')
                                .setTitle(response.title)
                                .setURL(response.content_urls.desktop.page)
                                .setDescription([`
                                ${response.extract}
                                Links For Topic You Searched [Link](${response.content_urls.desktop.page}).`])
                            message.channel.send(embed)
                        }
                        else {
                            const embed = new MessageEmbed()
                                .setColor('RANDOM')
                                .setTitle(response.title)
                                .setThumbnail(response.thumbnail.source)
                                .setURL(response.content_urls.desktop.page)
                                .setDescription(response.extract)
                            message.channel.send(embed)
                        }
                    }
                    catch {
                        return message.channel.send('Your input is not in Wikipedia, try another input!')
                    }
                })();
            break;
        }
    }
}