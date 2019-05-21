module.exports = (app, db) => {
  const products = require('./controllers/products')(db);

  app.get('/pineapple', products.getAll);

  app.get('/search/:item', products.getItem);

  app.post(`/test`, products.testStuff);

};