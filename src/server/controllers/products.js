module.exports = (db) => {
  let getAll = (request, response) => {

    db.products.getAll((error, products) => {

      console.log("answering req to /products")
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
  const getOne = (req,res)=> {
    db.products.getOne(req.params.item, (err, results) => {
      if (err){
        console.log('Error', err);
        res.status(500).send(err);
      } else {
        // the object below is the json object result that React receives
        res.send({
          product: results
        })
      }
    })
  }
  return {
    getAll: getAll,
    getOne: getOne
  };
};
