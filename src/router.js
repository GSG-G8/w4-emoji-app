const fs = require('fs');
const path = require('path');

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
  } else {
    response.writeHead(404, { 'Content-Type': 'text/html' });
    response.write('<h1>404 error file not found</h1>');
    response.end();
  }
};

module.exports = router;
