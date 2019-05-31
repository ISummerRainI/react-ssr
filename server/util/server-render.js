const serialize = require('serialize-javascript')
const ReactSSR = require('react-dom/server');
const asyncBootstrap = require('react-async-bootstrapper');
const Helmet = require('react-helmet').default;
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
    // console.log(content)
    const helmet = Helmet.renderStatic();
    // console.log(helmet);

    const html = ejs.render(template, {
      title: helmet.title.toString(),
      meta: helmet.meta.toString(),
      link: helmet.link.toString(),
      appString: content,
      initialState: state
    })
    res.send(html);

  })
}
