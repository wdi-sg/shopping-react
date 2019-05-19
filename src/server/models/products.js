/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {
  // `dbPoolInstance` is accessible within this function scope

  let getAll = (callback, q) => {
    const values = ["%" + q.query + "%"];

    dbPoolInstance.query('SELECT * from products WHERE LOWER(name) LIKE ($1)', values, (error, queryResult) => {
        if (error) {
            callback(error, null);
        } else {
            callback(null, queryResult.rows );
        }
    });
  };

  return {
    getAll
  };
};