/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {
  // `dbPoolInstance` is accessible within this function scope

  let getAll = (request, callback) => {
    console.log(request.query.query);
    let queryString = "SELECT * from products WHERE name ILIKE '%" + request.query.query + "%'";
    dbPoolInstance.query(queryString, (error, queryResult) => {
      if (error) {
        // invoke callback function with results after query has executed
        callback(error, null);
      } else {
        // invoke callback function with results after query has executed

        callback(null, queryResult.rows);
      }
    });
  };

  return {
    getAll
  };
};
