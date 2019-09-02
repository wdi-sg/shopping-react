module.exports = (app, db) => {
  const products = require('./controllers/products')(db);

  app.get('/products', products.getAll);
  //app.get('/products/:id', products.indvProduct);

  //app.post('/products', products.getOneProduct);
};