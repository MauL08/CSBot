require('dotenv').config();

const { MessageEmbed } = require('discord.js')
const Scraper = require('images-scraper');
const fetch = require('node-fetch')
const request = require('node-superfetch')

const PREFIX = '$';

const google = new Scraper({
    puppeteer: {
        headless: true
    }
})

module.exports = {
    searchCommand: function (message) {
        if (message.author.bot) return;
        if (message.content.startsWith(PREFIX)) {
        const [command, ...args] = message.content
            .trim()
            .substring(PREFIX.length)
            .split(/\s+/)
        switch(command) {
            case 'img':
                (async () => {
                    const imageQueue = args.join(' ');
                    const imgRes = await google.scrape(imageQueue, 200);
                    message.channel.send(imgRes[Math.floor(Math.random() * imgRes.length)].url)
                })();
            break;
            case 'google':
                (async () => {
                    const googleKey = process.env.GOOGLE_API;
                    const csx = 'b4340115fcd24ce3c'
                    let searchQueue = args.join(' ');

                    if (!searchQueue) return message.channel.send('Please Input search Subject.');

                    href = await search(searchQueue);
                    if (!href) return message.channel.send('Nothing Found!')

                    const emb = new MessageEmbed()
                        .setTitle(href.title)
                        .setDescription(href.snippet)
                        .setImage(href.pagemap ? href.pagemap.cse_thumbnail[0].src : null)
                        .setURL(href.link)
                        .setColor('RANDOM')
                        .setFooter('Powered by Google')
                    message.channel.send(emb)

                    async function search(query) {
                        const { body } = await request.get('https://www.googleapis.com/customsearch/v1').query({
                            key: googleKey, cx: csx, safe: 'off', q: query 
                        });

                        if (!body.items) return null;
                        return body.items[0];
                    }
                })();
            break;
            case 'wiki':
                (async () => {
                    const subWiki = args.join(' ');
                    if (!subWiki) message.channel.send('Please type the correct Subject.')
                    
                    const url = `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(subWiki)}`

                    let response;

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
    }}
}