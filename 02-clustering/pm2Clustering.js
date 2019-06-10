const express = require('express');
const crypto = require('crypto');

const app = express();

const sleep = (duration) => {
  const start = Date.now();
  while (Date.now() - start < duration) {}
};

app.get('/', (req, res) => {
  crypto.pbkdf2('a', 'b', 500000, 512, 'sha512', () => {
    res.send('Hi there!');
  });
});

app.get('/sleep', (req, res) => {
  sleep(5000);
  res.send('Sorry, I was sleeping!');
});

app.get('/fast', (req, res) => {
  res.send('This was fast!');
});

app.listen(3000, () => {
  console.log('Listening');
});
