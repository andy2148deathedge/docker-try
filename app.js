const express = require('express');

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  return res.send('docker node try on board!!');
});

app.listen(PORT, (req, res) => {
  console.log(`AWS Todos is listening on port ${PORT}.`);
});