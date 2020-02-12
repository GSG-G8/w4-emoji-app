const http = require('http');
const router = require('./router');

const server = http.createServer(router);


const PORT = process.env.PORT || 4000;
const HOST = process.env.HOST || 'localhost';


/* eslint-disable no-console */
server.listen(PORT, () => {
  console.log(`Server is running on http://${HOST}:${PORT}`);
});
