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

    console.log(req.params.item)

    capitalize =(str)=>{
        return str.charAt(0).toUpperCase()+str.slice(1);
    }

    let string = capitalize(req.params.item);

    console.log(string)
    console.log('end of thing')
    db.products.getItem(string,(error, products) =>{
        if(error) {
            console.log('error!', error);
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