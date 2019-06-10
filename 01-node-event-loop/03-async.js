const https = require('https');

const start = Date.now();

function doRequest(i) {
  https
    .request('https://www.google.com', (res) => {
      res.on('data', () => {
      });

      res.on('end', () => {
        console.log(`${i + 1}: ${Date.now() - start}ms`);
      });
    })
    .end();
}

for(let i = 0; i < 60; i++) {
  doRequest(i);
}