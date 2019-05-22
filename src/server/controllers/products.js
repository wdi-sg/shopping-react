module.exports = (db) => {
  let getAll = (request, response) => {

    console.log("getAll");

    db.products.getAll((error, products) => {
      // queryResult contains pokemon data returned from the pokemon model
      if (error) {
        console.error('error getting products', error);
        response.status(500);
        response.send('server error');
      } else {
        response.send({products: products});
      }
    });
  };

    let getSome = (request, response) => {
        let searchQuery = request.params.query;
        // console.log("SQ", searchQuery);
        db.products.getSome(searchQuery, (error, products) => {

            if (error) {
                console.error('error getting products', error);
                response.status(500);
                response.send('server error');
            }
            else {
                response.send({products: products});
            }
        });
    };

  return {
    getAll: getAll,
    getSome: getSome
  };
};