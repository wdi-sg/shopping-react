module.exports = (db) => {
  let getAll = (request, response) => {

    db.products.getAll(request, (error, result) => {
      // queryResult contains products data returned from the products model
      if (error !== null) {
        console.error('query error test 1');
        response.status(500).send("Error");
      } else if(result !== null) {
          console.log("HERE");
          console.log(result);
          console.log("HERE LA");
          console.log(result.rows);
        response.send({products: result.rows});
      }
    });

}

let edit = (request, response) => {

    db.products.edit(request, (error, result) => {
      // queryResult contains products data returned from the products model
      if (error !== null) {
        console.error('query error test 2');
        response.status(500).send("Error");
      } else if(result !== null) {
          console.log("HERE");
          console.log(result);
          console.log("HERE LA");
          console.log(result.rows);
        response.send({resultToReturn: result.rows});
      }
    });

}

  return {
    getAll: getAll,
    edit: edit
  };
};