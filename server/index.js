const express = require('express');
const path = require('path');

const app = express();
const fs = require('fs');

app.use('/public', express.static(path.join(__dirname, '../dist')));
app.get('*', (req, res, next) => {
  const template = fs.readFileSync(path.join(__dirname, '../dist/index.html'), 'utf8');
  res.send(template);
});

app.listen(3001, () => {
  console.log('server is runing at: http://127.0.0.1:3001');
});
