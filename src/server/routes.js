module.exports = (app, db) => {
  const products = require('./controllers/products')(db);

  app.get('/pineapple', products.getAll);

  app.get('/slipperyfall/:item', products.getItem);

};