module.exports = (app, db) => {
  const products = require('./controllers/products')(db);

  app.get('/filter/:query', products.getSome);

  app.get('/products', products.getAll);

};