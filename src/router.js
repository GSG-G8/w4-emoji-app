const path = require('path');
const searchHandle = require('./handelers/searchHandle');
const publicHandle = require('./handelers/publichandle');


module.exports = (request, response) => {
  let endpoint = request.url.split('/').filter((e) => e !== '');
  if (endpoint.length === 0) endpoint = ['public', 'index.html'];
  const filePath = path.join(__dirname, '..', ...endpoint);
  const fileName = endpoint[endpoint.length - 1];
  const fileExt = fileName.split('.').pop().toLowerCase();

  if (endpoint[0] === 'public') {
    publicHandle(request, response, filePath, fileExt);
  } else if (endpoint[0] === 'search') {
    searchHandle(request, response, endpoint[1]);
  } else {
    response.writeHead(308, { Location: '/public/404.html' });
    response.end();
  }
};
