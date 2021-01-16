/*
Mobile and geolocation
This Nodejs program uses Playwright to emulate Mobile Safari on a device at a given geolocation,
navigate to maps.google.com, perform actions and take a screenshot.
*/

const { webkit, devices } = require('playwright');
const iPhone11 = devices['iPhone11 Pro'];

(async () => {
  const browser = await webkit.launch();
  const context = await browser.newContext({
    ...iPhone11,
    locale: 'en-US',
    geolocation: { longitude: 12.492507, latitude: 41.889938 },
    permissions: ['geolocation']
  });

  const page = await context.newPage();

  await page.goto('https://maps.google.com');
  await page.click('text="Your Location"');
  await page.waitforRequest(/.*preview\/pwa/);
  await page.screenshot({ path: 'colosseum-iphone.png'});
  await browser.close();
})();
