const homehandle = require('./handelers/homehandle');
const publichandle = require('./handelers/publichandle');

module.exports = (req, res) => {
  const endpoint = req.url;

  if (endpoint === '/') {
    homehandle(res);
  } else if (endpoint.includes('public')) {
    publichandle(req, res);
  }
};
