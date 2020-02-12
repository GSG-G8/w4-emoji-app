const fs = require('fs');
const path = require('path');

const emojiPath = path.join(__dirname, '..', '..', 'emoji.json');
let emojiArray = [];

module.exports = (request, response, keywords) => {
  fs.readFile(emojiPath, (error, file) => {
    if (error) {
      response.writeHead(404, { 'Content-Type': 'application/json' });
      response.end(error);
    } else {
      emojiArray = JSON.parse(file);
      const search = keywords.split('20%').map((e) => e.toLowerCase());
      const results = emojiArray.filter((e) => (
        search.some((k) => e.name.toLowerCase().includes(k))
      )).slice(0, 10);

      response.writeHead(200, { 'Content-Type': 'application/json' });
      response.end(JSON.stringify(results));
    }
  });
};
