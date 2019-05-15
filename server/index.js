const express = require('express');
const ReactSSR = require('react-dom/server');
const path = require('path');

const app = express();
const fs = require('fs');
const serverEntry = require('../dist/server-entry.js').default;

app.use('/public', express.static(path.join(__dirname, '../dist')));
app.get('*', (req, res, next) => {
  const template = fs.readFileSync(path.join(__dirname, '../dist/index.html'), 'utf8');
  const appString = ReactSSR.renderToString(serverEntry);
  res.send(template.replace('<!-- app -->', appString));
});

app.listen(3001, () => {
  console.log('server is runing at: http://127.0.0.1:3001');
});
