const express = require('express');
const ReactSSR = require('react-dom/server');
const path = require('path');
const serverRender = require('./util/server-render');

const app = express();
const isDev = process.env.NODE_ENV === 'development';

if (!isDev) {
  const fs = require('fs');
  const serverEntry = require('../dist/server-entry.js');
  const template = fs.readFileSync(path.join(__dirname, '../dist/server.ejs'), 'utf8');

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
