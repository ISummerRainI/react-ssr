
const ReactSSR = require('react-dom/server');
const asyncBootstrap = require('react-async-bootstrapper');

module.exports = (serverBundle, template, req, res) => {
  const createStoreMap = serverBundle.createStoreMap;
  const createApp = serverBundle.default;
  const routerContext = {};
  const store = createStoreMap();
  const app = createApp(store, routerContext, req.url);

  asyncBootstrap(app).then(() => {
    if (routerContext.url) {
      res.status(302).setHeader('Location', routerContext.url);
      res.send();
      return;
    }
    const content = ReactSSR.renderToString(app);
    res.send(template.replace('<!-- app -->', content));

  })
}
