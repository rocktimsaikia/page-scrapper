const pageScrapper = require('../lib');

(async() => {
    const data = await pageScrapper('https://jsonplaceholder.typicode.com/');

    console.log(data);
})();