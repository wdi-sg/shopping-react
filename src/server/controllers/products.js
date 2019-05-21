const fs = require('fs');
global.atob = require("atob");

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

  let testStuff = (req,res)=>{

    console.log('HELLOO IN TEST');
    //get raw dataurl in server side
    // console.log(req.body.data);
    //split remove header
    var noHeadString = req.body.data.slice(22);
    console.log(noHeadString);
    //decode base64 string into raw binary data held in a string
    var byteString = atob(noHeadString)

    // console.log('HELLLOOOO WHERE ARE U', byteString)

    // write the btyes of the string into an ArrayBuffer(not sure what this is...)
    var ab = new ArrayBuffer(byteString.length);
    var ia = new Uint8Array(ab);
    //  // console.log('WTF IS GOING ON', ia)
    for(var i = 0; i < byteString.length; i ++){
        ia[i] = byteString.charCodeAt(i);
    }
    // console.log('WTF IS GOING ON', ia);

    // var bb = new Blob([ab], {type:type});

    // console.log('THIS IS WHAT?', bb)

    fs.writeFile("./test.png", ia, res=>{console.log('done something')})

    res.send('hello');
  }

  return {
    getAll: getAll,
    getItem: getItem,
    testStuff:testStuff
  };
};