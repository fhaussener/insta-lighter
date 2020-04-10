// const chrome = require('chrome-aws-lambda');
// const puppeteer = require('puppeteer-core');

// async function getProfileInfo(account) {

//   const browser = await puppeteer.launch({
//     args: chrome.args,
//     executablePath: await chrome.executablePath,
//     headless: chrome.headless,
//   });

//   const page = await browser.newPage();

//   // go to Instagram web profile (this example use Cristiano Ronaldo profile)
//   await page.goto('https://instagram.com/' + account);

//   // check username exists or not exists
//   let isUsernameNotFound = await page.evaluate(() => {
//     // check selector exists
//     if (document.getElementsByTagName('h2')[0]) {
//       // check selector text content
//       if (document.getElementsByTagName('h2')[0].textContent == "Sorry, this page isn't available.") {
//         return true;
//       }
//     }
//   });

//   if (isUsernameNotFound) {
//     console.log('Account not exists!');

//     // close browser
//     await browser.close();
//     return;
//   }

//   // get username
//   let username = await page.evaluate(() => {
//     return document.querySelectorAll('header > section h2')[0].textContent;
//   });


//   // get username picture URL
//   let usernamePictureUrl = await page.evaluate(() => {
//     return document.querySelectorAll('header img')[0].getAttribute('src');
//   });

//   // close the browser
//   await browser.close();

//   return ({
//     'username': username,
//     'username_picture_url': usernamePictureUrl,
//   })
// }

// module.exports = getProfileInfo;