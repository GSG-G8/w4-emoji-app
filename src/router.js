const fs = require('fs');
const path = require('path');

const fileExtention = {
  html: 'text/html',
  css: 'text/css',
  jpg: 'image/jpeg"',
  png: 'image/png"',
  ico: 'image/x-ion',
  js: 'text/javascript',
};

const router = (request, response) => {
  const endpoint = request.url;
  if (endpoint === '/') {
    const filePath = path.join(__dirname, '..', 'public', 'index.html');
    fs.readFile(filePath, (error, file) => {
      if (error) {
        response.writeHead(500, { 'Content-Type': 'text/html' });
        response.end('<h1>500 error</h1>');
      } else {
        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.end(file);
      }
    });
  } else if (endpoint.includes('public')) {
    const extention = endpoint.split('.')[1];
    const fileName = endpoint.split('/');
    const filePath = path.join(__dirname, '..', ...fileName);
    fs.readFile(filePath, (error, file) => {
      if (error) {
        console.log(error);
        response.writeHead(500, { 'Content-Type': 'text/html' });
        response.end('<h1>500 error</h1>');
      } else {
        response.writeHead(200, { 'Content-Type': fileExtention[extention] });
        response.end(file);
      }
    });
  } else {
    response.writeHead(404, { 'Content-Type': 'text/html' });
    response.write('<h1>404 error file not found</h1>');
    response.end();
  }
};

module.exports = router;
