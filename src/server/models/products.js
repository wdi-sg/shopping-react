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
    console.log("jadjashdjsahjdkhaskdhkasjhdkjashdjhasj");
    console.log(data);
    console.log("jadjashdjsahjdkhaskdhkasjhdkjashdjhasj");


    dbPoolInstance.query(`SELECT * from products WHERE name ILIKE '%${data}%'`, (error, queryResult) => {

      if (error) {
        // invoke callback function with results after query has executed
        callback(error, null);
      } else {
        // invoke callback function with results after query has executed

        callback(queryResult.rows);
      }
    });
  };

  return {
    getAll,
    find
  };
};