
const ReactSSR = require('react-dom/server');

module.exports = (serverBundle, template, req, res) => {
  routerContext = {};
  const app = serverBundle(routerContext, req.url);

  const content = ReactSSR.renderToString(app);

  if (routerContext.url) {
    res.status(302).setHeader('Location', routerContext.url);
    res.send();
    return;
  }
  res.send(template.replace('<!-- app -->', content));
}
