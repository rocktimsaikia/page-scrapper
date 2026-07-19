# page-scrapper

[![CI](https://github.com/rocktimsaikia/page-scrapper/actions/workflows/test.yml/badge.svg)](https://github.com/rocktimsaikia/page-scrapper/actions/workflows/test.yml)
![npm](https://badgen.net/npm/v/page-scrapper)

Scrape all links and images from a web page.

## Installation

Requires Node.js 20 or later.

```sh
npm install page-scrapper
```

## Usage

```js
import pageScrapper from 'page-scrapper';

const result = await pageScrapper('https://jsonplaceholder.typicode.com/');

console.log(result);
```

Output:

```js
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
```

## Options

| Option         | Required | Default | Description |
| :------------- | :------: | :-----: | ----------- |
| `absoluteOnly` | No       | `true`  | Only scrape the absolute links. When set to `false` it will fetch the relative paths too. |

## Related

[**meta-fetcher**](https://github.com/rocktimsaikia/meta-fetcher): Simple metadata scraper for Node.js.

## License

MIT 2021-2026 &copy; [Rocktim Saikia](https://rocktim.dev)
