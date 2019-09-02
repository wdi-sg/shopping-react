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

    // let data = request.params.id;

    let data = {
        queryString: request.query.search,
        order: request.query.order
    }

    // console.log(request.query);

    db.products.find(data, doneWithQuery);

  }

  // let sort = (request, response) => {

  //   db.products.sort((error, products) => {
  //     // queryResult contains pokemon data returned from the pokemon model
  //     if (error) {
  //       console.error('error getting pokemon', error);
  //       response.status(500);
  //       response.send('server error');
  //     } else {
  //       response.send({products: products});
  //     }
  //   });
  // };




  return {
    getAll: getAll,
    find: find,
    // sort: sort
  };
};