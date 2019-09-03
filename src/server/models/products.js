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

  let newThing = (data,callback) => {

    let name = data.name;
    let description = data.description;
    let price = data.price;

    let query = "INSERT INTO products (name, description, price) VALUES ($1, $2, $3) RETURNING *";
    const values = [name, description, price];

    dbPoolInstance.query(query, values, (error, queryResult) => {
      if (error) {
        // invoke callback function with results after query has executed
        callback(error, null);
      } else {
        // invoke callback function with results after query has executed

        callback(null, queryResult.rows );
      }
    });



  };

  return {
    getAll,
    newThing:newThing,
  };
};