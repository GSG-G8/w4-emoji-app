const path = require('path');
const fs = require('fs');
const searchHandle = require('./handelers/searchHandle');
const publicHandle = require('./handelers/publichandle');

const PORT = process.env.PORT || 4000;
const HOST = process.env.HOST || 'localhost';

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
    fs.readFile(path.join(__dirname, '..', 'public', '404.html'), (err, file) => {
      response.writeHead(404, { 'Content-Type': 'text/html' });
      
      response.end(file);
    });
  }
};
