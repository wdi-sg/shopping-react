module.exports = (db) => {
  let displayLogin= (request, response) => {
    response.render('login/display');
  };

  let displaySignup= (request, response) => {
    response.render('login/signup');
  };

  return {
    displayLogin,
    displaySignup
  };
};
