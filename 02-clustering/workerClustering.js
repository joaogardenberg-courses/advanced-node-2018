const express = require('express');
const crypto = require('crypto');
const Worker = require('webworker-threads').Worker;

const app = express();

const sleep = (duration) => {
  const start = Date.now();
  while (Date.now() - start < duration) {}
};

app.get('/', (req, res) => {
  const worker = new Worker(function() {
    this.onmessage = function() {
      let counter = 0;

      while(counter < 1e9) {
        counter++;
      }

      postMessage(counter);
    }


  });

  worker.onmessage = function(message) {
    res.send(`${message.data}`);
  };

  worker.postMessage();
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
