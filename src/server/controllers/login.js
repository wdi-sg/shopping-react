module.exports = (db) => {
  let displayLogin= (request, response) => {


    response.cookie('meow','Hello');
    response.render('login/display');

  };

  return {
    displayLogin
  };
};
