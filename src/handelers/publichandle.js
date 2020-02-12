const fs = require('fs');
const path = require('path');

const ext = {
  html: 'text/html',
  css: 'text/css',
  js: 'text/javascript',
  ico: 'image/x-icon',
  jpg: 'image/jpeg',
};

module.exports = (req, res) => {
  const endpoint = req.url;
  const fileName = endpoint.split('/');
  const fileExt = endpoint.split('.')[1];
  const filePath = path.join(__dirname, '..', '..', ...fileName);
  fs.readFile(filePath, (error, file) => {
    if (error) {
      console.log(`File Name ${fileName[fileName.length - 1]} Error From Server: ${error}`);
      res.writeHead(500, { 'Conten-Type': 'text/html' });
      res.end('<h1>500 Error From Server</h1>');
    } else {
      res.writeHead(200, { 'Content-Type': ext[fileExt] });
      res.end(file);
    }
  });
  console.log(filePath);
};
