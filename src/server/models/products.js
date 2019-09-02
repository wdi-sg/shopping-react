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

        callback(null, queryResult.rows );
      }
    });
  };

  let find = (data, callback) => {


    dbPoolInstance.query(`SELECT * from products WHERE name ILIKE '%${data.queryString}%' ORDER BY price ${data.order}`, (error, queryResult) => {

      if (error) {
        // invoke callback function with results after query has executed
        callback(error, null);

      } else {
        // invoke callback function with results after query has executed

        callback(queryResult.rows);
      }
    });
  };

  // let sort = (callback) => {

  //   dbPoolInstance.query(`SELECT * FROM products ORDER BY price ASC`, (error, queryResult) => {

  //     if (error) {
  //       // invoke callback function with results after query has executed
  //       callback(error, null);
  //     } else {
  //       // invoke callback function with results after query has executed

  //       callback(null, queryResult.rows);
  //     }
  //   });
  // };

  return {
    getAll,
    find,
    // sort
  };
};