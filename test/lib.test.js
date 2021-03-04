const pageScrapper = require('../lib');
const isAbsolute = require('is-absolute-url');

describe('Main', () => {
    it('should return only the absolute links', async() => {
        const res = await pageScrapper('https://jsonplaceholder.typicode.com/');
        expect(typeof res === 'object').toBe(true);
        expect(res).toHaveProperty('links');
        expect(res).toHaveProperty('images');
        res['links'].forEach(link => {
            expect(isAbsolute(link)).toBeTruthy();
        });
        res['images'].forEach(link => {
            expect(isAbsolute(link)).toBeTruthy();
        })
    });
});