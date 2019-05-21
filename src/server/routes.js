module.exports = (app, db) => {
  const products = require('./controllers/products')(db);

  app.get('/products', products.getAll);
  app.get('/products/search/:id', products.find);
  app.get('/products/search', products.find);
  // app.get('/sort', products.sort);
};