const fs = require('fs');
const path = require('path');

module.exports = (res) => {
  const filePath = path.join(__dirname, '..', '..', 'public', 'index.html');
  fs.readFile(filePath, (error, file) => {
    if (error) {
      console.log(`Error from index file: ${error}`);
      res.writeHead(500, { 'Content-Type': 'text/html' });
      res.end('<h1>500 Error From Server</h1>');
    } else {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(file);
    }
  });
};
