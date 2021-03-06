/* eslint-disable unicorn/prevent-abbreviations */
const pageScrapper = require('../lib');
const isAbsolute = require('is-absolute-url');

describe('Main', () => {
    it('should return only the absolute links', async() => {
        const res = await pageScrapper('https://jsonplaceholder.typicode.com/');
        expect(typeof res === 'object').toBe(true);
        expect(res).toHaveProperty('links');
        expect(res).toHaveProperty('images');
        for (const link of res['links']) {
            expect(isAbsolute(link)).toBeTruthy();
        }
        for (const link of res['images']) {
            expect(isAbsolute(link)).toBeTruthy();
        }
    });
});