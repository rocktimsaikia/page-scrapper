const fetch = require('node-fetch');
const cheerio = require('cheerio');
const isAbsolute = require('is-absolute-url');
const isUrl = require('is-url-superb');

const processOptions = (options) => ({ absoluteOnly: true, ...options });

const removeDuplicates = (array) => [...new Set(array)];

const pageScrapper = async (url, options) => {
    const data = await fetch(url);
    const content = await data.text();
    const $ = cheerio.load(content);
    
    let links = [];
    let images = [];
    
    $('a').each((_, link) => links.push($(link).attr('href')));
    $('img').each((_, img) => images.push($(img).attr('src')));

    if(options.absoluteOnly){
        links = links.filter(isAbsolute);
        images = images.filter(isAbsolute);
        return { 
            links: removeDuplicates(links), 
            images: removeDuplicates(images)
        };
    }

    return { 
        links: removeDuplicates(links), 
        images: removeDuplicates(images)
    };
};

module.exports = (url, options) => {
    if(!isUrl(url)) throw new Error('Not a valid URL');

    options = processOptions(options);
    return pageScrapper(url, options);
};