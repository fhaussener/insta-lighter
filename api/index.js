const getProfileInfo = require('./instagram_account_profile');

module.exports = async function (req, res) {
  // const { pathname = '/', query = {} } = parse(req.url, true);
  // let url = pathname.slice(1);

  const file = await getProfileInfo("cristiano");
  res.statusCode = 200;
  res.setHeader("Content-Type", `image`);
  res.end(file);
};