module.exports = (app, db) => {
  const cats = require('./controllers/cats')(db);

  app.get('/cats', cats.getAll);
};