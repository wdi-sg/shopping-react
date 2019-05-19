module.exports = (db) => {

  let getAll = (req, res) => {

    db.products.getAll((error, products) => {
      // queryResult contains pokemon data returned from the pokemon model
      if (error) {
        console.error('error getting pokemon', error);
        res.status(500);
        res.send('server error');
      } else {
        res.send({products: products});
      }
    });
  };

  let getItem = (req,res) =>{
    console.log('IN SERVER SIDE Ggonna get stuff!');
    console.log('inside CONTROLLER: ', req.params.item);
    // const sheetFaced = (giveYouThis)=>{


    //     db.products.getItem()
    // }
    db.products.getItem(req.params.item,(error, products) =>{
        if(error) {
            console.log('error stutterrringg', error);
            res.status(500);
            res.send('SERVER ERROR!!');
        } else {
            res.send( {products:products} );
        }
    });
  }
  return {
    getAll: getAll,
    getItem: getItem
  };
};