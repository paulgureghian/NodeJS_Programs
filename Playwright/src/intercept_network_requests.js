/*Intercept network requests.
This Nodejs program uses Playwright to set up request routing for a WebKit page to log all network requests.
*/

const { webkit } = require('playwright');

(async () => {
  const browser = await webkit.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  // Log and continue all newtork requests
  page.route('**', route => {
    console.log(route.request().url());
    route.continue();
  });

  await page.goto('http://todomvc.com');
  await browser.close();
})();
  
