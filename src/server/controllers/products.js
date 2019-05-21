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

  //All console.log()occurs inside Terminal instead of browser!
  let getSearchResult = (request, response) => {
    console.log(`server/controllers/products.js`, request);
    const searchInput = request.query.search; // {search: 'example'}

    const callback = (error, products) => {
      if (error) {
        console.error('search error', error);
        response.status(500);
        response.send('server error');
      } else {
        response.send({products: products});
      }
    };

    db.products.getSearchResult(searchInput, callback);
  };

  return {
    getAll: getAll,
    getSearchResult: getSearchResult
  };
};
