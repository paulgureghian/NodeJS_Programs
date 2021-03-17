const {zipSync, unzipSync} = require('../src');

describe('Test', () => {
    test('zipSync should be truthy', () => {
        expect(zipSync).toBeTruthy();
    });

    test('unzipSync should be truthy', () => {
        expect(unzipSync).toBeTruthy();
    });
});
