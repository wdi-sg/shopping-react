module.exports = (db) => {
  let getAll = (request, response) => {

    db.products.getAll((error, products) => {
      // queryResult contains pokemon data returned from the pokemon model
      if (error) {
        console.error('error getting pokemon', error);
        response.status(500);
        response.send('server error');
      } else {
        response.send({products: products});
      }
    });
  };



      let newProduct = (request, response) => {
        console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~')
        console.log(request.body)
        db.products.newThing(request.body,(error, result) => {
          console.log("^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^");
          console.log("^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^");
          console.log("^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^");
          console.log("^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^");
          console.log("^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^");
          console.log( error );
          console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$");
          console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$");
          console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$");
          console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$");
          console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$");
          console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$");
          console.log( result );

        });
        response.send("WHAT WORKS");
    }

  return {
    getAll: getAll,
    newProduct:newProduct
  };
};