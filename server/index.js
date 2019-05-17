const express = require('express');
const ReactSSR = require('react-dom/server');
const path = require('path');

const app = express();
const isDev = process.env.NODE_ENV === 'development';

if (!isDev) {
  const fs = require('fs');
  const serverEntry = require('../dist/server-entry.js').default;
  const template = fs.readFileSync(path.join(__dirname, '../dist/index.html'), 'utf8');

  app.use('/public', express.static(path.join(__dirname, '../dist')));
  app.get('*', (req, res, next) => {
    serverRender(serverEntry, template, req, res)
  });
} else {
  const devStatic = require('./util/dev-static');
  devStatic(app);
}

app.listen(3001, () => {
  console.log('server is runing at: http://127.0.0.1:3001');
});
