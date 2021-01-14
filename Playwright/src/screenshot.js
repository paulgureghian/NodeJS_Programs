/*
This Nodejs program uses Playwright to navigate to "whatsmyuseragent.org" in Chromium, Firefox,
And WebKit, and saves 3 screenshots.
*/

const playwright = require('playwright');

(async () => {
  for (const browserType of ['chromium', 'firefox', 'webkit']) {
    const browser = await playwright[browserType].launch();
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto('http://whatsmyuseragent.org/');
    await page.screenshot({ path: `example-${browserType}.png`});
    await browser.close();
  }
})();
