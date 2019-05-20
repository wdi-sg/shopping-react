module.exports = (db) => {
  let getAll = (request, response) => {

    db.products.getAll((error, products) => {
      // queryResult contains product data returned from the product model
      if (error) {
        console.error('error getting all products', error);
        response.status(500);
        response.send('server error');
      } else {
        response.send({products: products});
      }
    });
  };

  let search = (request, response) => {

    const searchInput = request.params.query;
    let order = request.params.order;
    console.log("order", order);

    const callback = (error, products) => {
      // queryResult contains product data returned from the product model
      if (error) {
        console.error('search error', error);
        response.status(500);
        response.send('server error');
      } else {
        response.send({products: products});
      }
    }

    db.products.search(searchInput, order, callback);
  };

  return {
    getAll: getAll,
    search: search
  };
};
