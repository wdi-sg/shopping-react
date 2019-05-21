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

  let find = (request, response) => {

    const doneWithQuery = (result) => {
        response.send({products: result});
    }

    let data = "bread";

    db.products.find(data, doneWithQuery);

  }


  return {
    getAll: getAll,
    find: find
  };
};