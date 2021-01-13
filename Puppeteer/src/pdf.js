/*
This Nodejs program will navigate to https://news.ycombinator.com and save it as a PDF
By manipulating it with Puppeteer's API.
*/

const puppeteer = require('puppeteer');

(async () => {
const browser = await puppeteer.launch();
const page = await browser.newPage();
await page.goto('https://news.ycombinator.com', {waitUntil: 'networkidle2'});
await page.pdf({path: 'hn.pdf', format: 'A4'});

await browser.close();
})();
