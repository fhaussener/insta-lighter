const getScreenshot = require('./screenshot');
const { parse } = require('url')

module.exports = async function (req, res) {
  const { pathname = '/screen', query = {} } = parse(req.url, true);
  const { type = 'png' } = query; // png or jpeg
  let url = pathname.slice(1);
  if (!url.startsWith('http')) {
    url = 'https://' + url; // add protocol if missing
  }
  const file = await getScreenshot(url, type);
  res.statusCode = 200;
  res.setHeader('Content-Type', `image/${type}`);
  res.end(file);
};