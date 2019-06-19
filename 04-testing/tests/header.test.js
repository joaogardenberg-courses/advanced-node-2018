const puppeteer = require('puppeteer');

let browser, page;

beforeEach(async () => {
  browser = await puppeteer.launch({
    headless: false
  });

  page = await browser.newPage();
  await page.goto('localhost:3000');
});

afterEach(async () => {
  await browser.close();
});

test('the header has the correct text', async () => {
  try {
    const text = await page.$eval('a.brand-logo', (el) => el.innerHTML);
  } catch (e) {}

  expect(text).toEqual('Blogster');
});

test('clicking login starts oAuth flow', async () => {
  try {
    await page.click('.right a');
  } catch(e) {}

  const url = await page.url();

  expect(url).toMatch(/accounts\.google\.com/);
});