module.exports = (db) => {
  let getAll = (request, response) => {

    db.products.getAll((error, products) => {
      // queryResult contains pokemon data returned from the pokemon model
      if (error) {
        console.error('error getting pokemon', error);
        response.status(500);
        response.send('server error');
      } else {
        console.log("TEEGEEE")
        response.send({products: products});
      }
    });
  };

    let test = (request, response) => {

    db.products.test((error, products) => {
      // queryResult contains pokemon data returned from the pokemon model
      if (error) {
        console.error('error getting pokemon', error);
        response.status(500);
        response.send('server error');
      } else {
        console.log("TEEGEEE")
        response.send({products: products});
      }
    });
  };

      let testing = (request, response) => {
        console.log("SDFSDFSDFDF")
  };

  return {
    getAll: getAll,
    test: test,
    testing: testing
  };
};