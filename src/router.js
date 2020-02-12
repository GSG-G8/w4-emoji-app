const homehandle = require('./handelers/homehandle');
const publichandle = require('./handelers/publichandle');

module.exports = (req, res) => {
  const endpoint = req.url;

  if (endpoint === '/') {
    homehandle(res);
  } else if (endpoint.includes('public')) {
    publichandle(req, res);
  } else {
    res.writeHead(500, { 'Conten-Type': 'text/html' });
    res.end('<h1 style="color:black; font-weight:bold; border:2px solid #20ff; padding:20px; margin:20%; text-align:center;"> Error From Server  <span style="color:red;">500</span></h1>');
  }
};
