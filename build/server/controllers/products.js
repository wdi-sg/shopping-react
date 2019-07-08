module.exports = (db) => {
  let getAll = (request, response) => {

    db.products.getAll((error, products) => {
      // queryResult contains product data returned from the product model
      if (error) {
        console.error('error getting product', error);
        response.status(500);
        response.send('server error');
      } else {
        response.send({products: products});
      }
    });
  };

  return {
    getAll: getAll
  };
};
