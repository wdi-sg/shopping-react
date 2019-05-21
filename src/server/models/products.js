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

  const getOne = (params, callback) => {
    dbPoolInstance.query(`SELECT * FROM products WHERE name ILIKE '%${params}%'`, (err, res) => {
      if (err){
        callback(err, null);
      } else {
        console.log(res.rows);
        callback(null, res.rows);
      }
    })
  }

  return {
    getAll,
    getOne
  };
};