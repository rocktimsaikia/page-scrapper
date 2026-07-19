# page-scrapper [![Actions Status](https://github.com/rocktimsaikia/page-scrapper/workflows/build/badge.svg)](https://github.com/rocktimsaikia/page-scrapper/actions)
> Scrape all links and images from a web page :package:

## Installation
Requires Node.js 20 or later.

```sh
npm install page-scrapper
```

## Highlights
- Super easy to use
- Removes duplicate links/images by default
- Filters out the relative paths (configurable)
- Zero config, single dependency

## Basic Usage 
```js
const pageScrapper = require('page-scrapper');

(async() => {
    const data = await pageScrapper('https://jsonplaceholder.typicode.com/');

    console.log(data);
    /* =>
    {
        links: [
            'https://github.com/typicode/mistcss',
            'https://github.com/sponsors/typicode',
            'https://blog.typicode.com',
            'https://my-json-server.typicode.com',
            'https://github.com/typicode/json-server',
            'https://github.com/typicode/lowdb',
            'https://github.com/users/typicode/sponsorship',
            'https://github.com/typicode'
        ],
        images: [
            'https://github.com/user-attachments/assets/adfee31f-a8b6-4684-9a9b-af4f03ac5b75'
        ]
    }
    */
})();
```

## Options
There are the currently available options

| Option         |  Required    | Default       | Description |
| :------------- | :----------: | :-----------: | -----------|
| `absoluteOnly` | No   		| `true`        | Only scraps the absolute links. When set it to `false` it will fetch the relative paths too.|

## Contribute
For any new feature request or bug report, please open an [issue] or [pull request].

## Related
- [meta-fetcher](https://github.com/rocktimsaikia/meta-fetcher) - Simple metadata scraper for Node.js

## License
MIT 2021-2026 &copy; [Rocktim Saikia](https://rocktim.dev)

[issue]: https://github.com/rocktimsaikia/page-scrapper/issues
[pull request]: https://github.com/rocktimsaikia/page-scrapper/pulls
