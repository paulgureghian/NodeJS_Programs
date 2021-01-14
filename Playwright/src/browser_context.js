/*
Evaluate in browser context
This  navigates to example.com in Firefox, and executes a script in the page context.
*/

const { firefox } = require('playwright');

(async () => {
  const browser = await firefox.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto('https://example.com/');

  const dimensions = await page.evaluate(() => {
    return {
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight,
      deviceScaleFactor: window.devicePixelRatio
    }
  });

  console.log(dimensions);

  await browser.close();
})();
