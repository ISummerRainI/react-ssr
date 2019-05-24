const serialize = require('serialize-javascript')
const ReactSSR = require('react-dom/server');
const asyncBootstrap = require('react-async-bootstrapper');
const ejs = require('ejs');

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
    const state = serialize(store.getState());
    const content = ReactSSR.renderToString(app);
    const html = ejs.render(template, {
      appString: content,
      initialState: state
    })
    res.send(html);

  })
}
