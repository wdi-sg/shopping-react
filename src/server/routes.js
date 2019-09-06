module.exports = (app, db) => {
  const login = require('./controllers/login')(db);

  app.get('/login', login.displayLogin);
  app.get('/signup',login.displaySignup);

};