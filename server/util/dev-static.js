const express = require('express');
const axios = require('axios');
const path = require('path');
const webpack = require('webpack');
const MemoryFs = require('memory-fs');
const proxy = require('http-proxy-middleware');
const serverRender = require('./server-render');

const serverConfig = require('../../build/webpack.config.server');

const getTemplate = () => {
  return new Promise((resolve, reject) => {
    axios.get('http://127.0.0.1:3000/public/server.ejs').then(res => {
      resolve(res.data);
    }).catch(reject);
  })
}

const Module = module.constructor;

const mfs = new MemoryFs();
const serverCompiler = webpack(serverConfig);

serverCompiler.outputFileSystem = mfs;
let serverBundle;
serverCompiler.watch({}, (err, status) => {
  if (err) throw err;
  status = status.toJson();
  status.errors.forEach(err => { console.error(err) });
  status.warnings.forEach(warn => { console.error(warn) });

  const bundlePath = path.join(
    serverConfig.output.path,
    serverConfig.output.filename
  );
  const bundle = mfs.readFileSync(bundlePath, 'utf8');
  const m = new Module();
  m._compile(bundle, 'server-entry.js');
  serverBundle = m.exports;
})

module.exports = function (app) {
  app.use('/public', proxy({
    target: 'http://127.0.0.1:3000'
  }));
  app.get('*', (req, res, next) => {
    getTemplate().then(template => {
      serverRender(serverBundle, template, req, res)
    }).catch(next)
  });
}
