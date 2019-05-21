module.exports = (db) => {
  let getAll = (request, response) => {

    db.products.getAll((error, result) => {
      // queryResult contains products data returned from the products model
      if (error !== null) {
        console.error('query error test 1');
        response.status(500).send("Error");
      } else if(result !== null) {
        response.send({products: result});
      }
    });

}

  return {
    getAll: getAll
  };
};