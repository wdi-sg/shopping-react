module.exports = (app, db) => {
  const products = require('./controllers/products')(db);

  // app.get('/products/search/:query/order/:order', products.search);
  app.get('/products/:query', products.search);
  app.get('/products', products.getAll);
};