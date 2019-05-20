module.exports = (db) => {

  let getAll = (request, response) => {
    db.products.getAll((error, products) => {
      // queryResult contains pokemon data returned from the pokemon model
      if (error) {
        console.error('error getting pokemon', error);
        response.status(500);
        response.send('server error');
      } else {
        response.send({products: products});
      }
    });
  };

  let getIndvProduct = (request, response) => {
    db.products.indvProduct(request.params.id, (err, results) => {
        if (err) {
            console.error(err);
            response.status(500).send("Error getting indv product")
        } else {
            response.render('product/displayProduct', {indvProduct: result.rows[0]});

        }
    })
  }  // end of getting indv product

  return {
    getAll: getAll,
    indvProduct: getIndvProduct
  };
};