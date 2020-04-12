const chrome = require('chrome-aws-lambda');
const puppeteer = require('puppeteer-core');

// const isDev = process.env.NOW_REGION === 'dev1';

// export async function getOptions(isDev) {
//   let options
//   if (isDev) {
//     options = {
//       args: ['--start-maximized'],
//       executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
//       headless: false
//     };
//   } else {
//     options = {
//       args: chrome.args,
//       defaultViewport: chrome.defaultViewport,
//       executablePath: await chrome.executablePath,
//       headless: chrome.headless,
//     };
//   }
//   return options;
// }

async function getProfileInfo(req, res) {
  const pathname = req.url
  let urlFrag = pathname.split("/");
  let account = urlFrag[2];

  const browser = await puppeteer.launch({
    args: chrome.args,
    defaultViewport: chrome.defaultViewport,
    executablePath: await chrome.executablePath,
    headless: chrome.headless,
  });

  const page = await browser.newPage();
  page.setDefaultTimeout(0)

  await page.goto('https://instagram.com/' + account);
  await page.waitForSelector('header img');


  // check username exists or not exists
  let isUsernameNotFound = await page.evaluate(() => {
    // check selector exists
    if (document.getElementsByTagName('h2')[0]) {
      // check selector text content
      if (document.getElementsByTagName('h2')[0].textContent == "Sorry, this page isn't available.") {
        return true;
      }
    }
  });

  if (isUsernameNotFound) {
    res.status(404).send(`username not found`);
    // close browser
    await browser.close();
    return;
  }

  // let username = await page.evaluate(() => {
  //   return document.querySelectorAll('header > section h2')[0].textContent;
  // });


  let usernamePictureUrl = await page.evaluate(() => {
    return document.querySelectorAll('header img')[0].getAttribute('src');
  });

  // close the browser
  await browser.close();

  const response = {
    username: account,
    username_picture_url: usernamePictureUrl
  }

  res.setHeader('Content-Type', `application/json`);
  res.status(200).json(response);
}

module.exports = getProfileInfo;