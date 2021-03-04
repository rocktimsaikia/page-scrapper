const pageScrapper = require('page-scrapper');

(async() => {
    const data = await pageScrapper('https://jsonplaceholder.typicode.com/');

    console.log(data);
})();