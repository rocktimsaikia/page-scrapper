# :package: page-scrapper
> A simple node.js scrapper that pulls out all links and images of a given site.

## Installation
```sh
npm install page-scrapper
```

## Highlights
- Super easy to use
- Removes duplicate links/images by default
- Filters out the relative paths (configurable)
- Tests cases added

## Basic Usage 
```js
const pageScrapper = require('page-scrapper');

(async() => {
    const data = await pageScrapper('https://jsonplaceholder.typicode.com/');

    console.log(data);
    /* =>
    {
        links: [
            'https://dev.to/typicode/what-s-new-in-husky-5-32g5',
            'https://github.com/sponsors/typicode',
            'https://blog.typicode.com',
            'https://my-json-server.typicode.com',
            'https://github.com/typicode/json-server',
            'https://github.com/typicode/lowdb',
            'https://tryretool.com/?utm_source=sponsor&utm_campaign=typicode',
            'https://mockend.com',
            'https://github.com/users/typicode/sponsorship',
            'https://github.com/typicode'
        ],
        images: [
            'https://i.imgur.com/IBItATn.png',
            'https://mockend.com/banner.svg'
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
For any new feature request or bug report, please open an [issue] or [pull request] in GitHub.

## Related
- [meta-fecther](https://github.com/RocktimSaikia/meta-fetcher) - Tiny URL meta-data fetcher(scrapper) for Node.js

## License
MIT 2021 &copy; [Rocktim Saikia](https://rocktimsaikia.now.sh)

[issue]: https://github.com/rocktimsaikia/page-scrapper/issues
[pull request]: https://github.com/rocktimsaikia/page-scrapper/pulls