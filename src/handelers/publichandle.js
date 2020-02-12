const fs = require('fs');

const MIME = {
  txt: 'text/plain',
  htm: 'text/html',
  html: 'text/html',
  js: 'text/javascript',
  css: 'text/css',
  jpg: 'image/jpeg',
  jpeg: 'image/jpeg',
  png: 'image/png',
  gif: 'image/gif',
  ico: 'image/x-icon',
  json: 'image/x-icon',
};


module.exports = (request, response, filePath, fileExt) => {
  fs.readFile(filePath, (error, file) => {
    if (error) {
      response.writeHead(404, { 'Content-Type': 'text/html' });
      response.end('<h1>Page Not Found !</h1>');
    } else {
      response.writeHead(200, { 'Content-Type': MIME[fileExt] });
      response.end(file);
    }
  });
};
