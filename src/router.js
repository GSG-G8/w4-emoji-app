const path = require('path');
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
    response.writeHead(404, { 'Conten-Type': 'text/html' });
    response.end(`<h1 style='color:black; font-weight:bold; border:2px solid #20ff; padding:20px; margin:20%; text-align:center;'> Page not found <span style='color:red;'>404</span> <p><a href='http://${HOST}:${PORT}' style='background-color: #2D65C9; padding:5px; border: 1px solid black; border-radius:10px; cursor: pointer; text-decoration: none; color:black;'>back To Home</a></h1>`);
  }
};
