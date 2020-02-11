const http = require('http');
const router = require('./router');

const server = http.createServer(router);


const PORT = 4000;


/* eslint-disable no-console */
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
