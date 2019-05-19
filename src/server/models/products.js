/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPool) => {
  // `dbPool` is accessible within this function scope

  let getAll = (callback) => {

    dbPool.query('SELECT * from products', (err, queryResult) => {
      if (error) {
        // invoke callback function with results after query has executed
        callback(error, null);
      } else {
        // invoke callback function with results after query has executed

        callback(null, queryResult.rows );
      }
    });
  };
  let getItem = (dataIn, callback) =>{
    console.log('HELL AM I IN MODELSSSS')
    console.log('DATTTTTAA', dataIn)

    let queryString = `SELECT * FROM products where name LIKE '%${dataIn}%'`;
    dbPool.query(queryString, (err, r) => {
      if (err) {
        // invoke callback function with results after query has executed
        callback(err, null);
      } else {
        // invoke callback function with results after query has executed

        callback(null, r.rows );
      }
    });
  };

  return {
    getAll,
    getItem
  };
};