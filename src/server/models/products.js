/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {
  // `dbPoolInstance` is accessible within this function scope

  let getAll = (callback) => {

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

  return {
    getAll
  };
};