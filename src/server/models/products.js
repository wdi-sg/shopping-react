/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {
  // `dbPoolInstance` is accessible within this function scope

  let getAll = (request, callback) => {

    const queryString = "SELECT * FROM products";

    dbPoolInstance.query(queryString, (error, queryResult) => {
      if (error) {
        // invoke callback function with results after query has executed
        callback(error, null);
      } else {
        // invoke callback function with results after query has executed
            if(queryResult.rows.length !== 0) {
                callback(null, queryResult);
            } else {
                callback(null, null);
            }
        }
    });
  }

  let edit = (request, callback) => {
      // `UPDATE products SET name='${req.body.name}' WHERE id=${req.body.id} RETURNING *`
      console.log('REQUEST BODY', request.body);

    const queryString = `UPDATE products SET name='${request.body.name}' WHERE id=${request.body.id} RETURNING *`;

    console.log('QUERY STRING', queryString);

    dbPoolInstance.query(queryString, (error, queryResult) => {
      if (error) {
          console.log("LOOK AT THE ERROR HERE",error)
        // invoke callback function with results after query has executed
        callback(error, null);
      } else {
        // invoke callback function with results after query has executed
            if(queryResult.rows.length !== 0) {
                callback(null, queryResult);
            } else {
                callback(null, null);
            }
        }
    });
  }

  return {
    getAll,
    edit
  };
};