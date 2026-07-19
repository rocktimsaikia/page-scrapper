const cheerio = require('cheerio');

const removeDuplicates = (array) => [...new Set(array)];

const scrape = ($, selector, attribute, absoluteOnly) => {
    const values = $(selector)
        .map((_, element) => $(element).attr(attribute))
        .get()
        .filter(Boolean);
    return removeDuplicates(absoluteOnly ? values.filter((value) => URL.canParse(value)) : values);
};

const pageScrapper = async (url, absoluteOnly) => {
    const response = await fetch(url);
    const $ = cheerio.load(await response.text());
    return {
        links: scrape($, 'a', 'href', absoluteOnly),
        images: scrape($, 'img', 'src', absoluteOnly)
    };
};

module.exports = (url, options) => {
    if (!URL.canParse(url)) throw new Error('Not a valid URL');

    const { absoluteOnly = true } = { ...options };
    return pageScrapper(url, absoluteOnly);
};
