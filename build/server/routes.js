module.exports = (app, db) => {
  const products = require('./controllers/products')(db);
  app.get('/products', products.getAll);
  app.get('/test', products.test);
  app.get('/testing', products.testing);
};