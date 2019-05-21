/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {
  // `dbPoolInstance` is accessible within this function scope

  let getAll = (callback) => {
    dbPoolInstance.query('SELECT * from products', (error, queryResult) => {
      if (error) {
        // invoke callback function with results after query has executed
        callback(error, null);
      } else {
        // invoke callback function with results after query has executed

        callback(null, queryResult.rows);
      }
    });
  };

  let getSearchResult = (searchInput, callback) => {
    // console.log(`server/models/products.js` searchInput);
    const queryString = `SELECT * FROM products WHERE name ILIKE '%${searchInput}%'`;

    dbPoolInstance.query(queryString, (error, queryResult) => {
      if (error) {
        callback(error, null);
      } else {
        callback(null, queryResult.rows);
      }
    });
  };

  return {
    getAll,
    getSearchResult
  };
};
