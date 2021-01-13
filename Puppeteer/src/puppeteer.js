/*
This Nodejs program will navigate to https://example.com and save it as a screenshot
By manipulating it with Puppeteer's API.
*/

const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://example.com');
  await page.screenshot({path: 'example.png'});

  await browser.close();
})();
