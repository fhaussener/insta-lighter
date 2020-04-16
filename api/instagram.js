const axios = require('axios');

async function getUserInfo(req, res) {
  const pathname = req.url
  let urlFrag = pathname.split("/");
  let account = urlFrag[2];

  let uri = `https://www.instagram.com/${account}/?__a=1`

  let { data } = await axios.get(uri)

  const response = {
    username: account,
    username_picture_url: data.graphql.user.profile_pic_url_hd,
  }

  res.setHeader('Content-Type', `application/json`);
  res.status(200).json(response);
}

module.exports = getUserInfo;