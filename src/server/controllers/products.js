module.exports = (db) => {
  let getAll = (request, response) => {

    db.products.getAll((error, products) => {
      if (error) {
        console.error('error getting products', error);
        response.status(500);
        response.send('server error');
      } else {
        response.send({products: products});
      }
    }, request.query);
  };

  return {
    getAll
  };
};