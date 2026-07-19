const { test, before, after } = require('node:test');
const assert = require('node:assert/strict');
const http = require('node:http');
const pageScrapper = require('../lib');

const fixture = `<!DOCTYPE html>
<html>
<body>
    <a href="https://example.com/about">about</a>
    <a href="https://example.com/about">duplicate</a>
    <a href="/relative-page">relative</a>
    <img src="https://example.com/logo.png">
    <img src="/relative.png">
</body>
</html>`;

let server;
let url;

before(async () => {
    server = http.createServer((_, response) => {
        response.setHeader('content-type', 'text/html');
        response.end(fixture);
    });
    await new Promise((resolve) => server.listen(0, '127.0.0.1', resolve));
    url = `http://127.0.0.1:${server.address().port}`;
});

after(() => server.close());

test('returns only deduplicated absolute links by default', async () => {
    const result = await pageScrapper(url);
    assert.deepEqual(result, {
        links: ['https://example.com/about'],
        images: ['https://example.com/logo.png']
    });
});

test('includes relative paths when absoluteOnly is false', async () => {
    const result = await pageScrapper(url, { absoluteOnly: false });
    assert.deepEqual(result, {
        links: ['https://example.com/about', '/relative-page'],
        images: ['https://example.com/logo.png', '/relative.png']
    });
});

test('throws on invalid url', () => {
    assert.throws(() => pageScrapper('not a url'), { message: 'Not a valid URL' });
});
