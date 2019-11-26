import React from 'react';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
// import { hot } from 'react-hot-loader';
// import styles from './style.scss';



class App extends React.Component{
    constructor(){
        super();
        this.state = {
            products: []
        }
    }

    getProducts(){


        const url = '/products.json';

        const whenDone = (response) => {
          const data = response.data
          this.setState({ products: data })
          console.log( "WOW DATA",data );
        }

        const whenError = (error)=>{
          console.log(error);
        };

        axios.get(url)
            .then(whenDone)
            .catch(whenError)




        // // old ajax way
        // var responseHandler = function() {
        //   console.log("response text", this.responseText);
        //   console.log("status text", this.statusText);
        //   console.log("status code", this.status);
        //   //this.setState({posts: -----});
        // };

        // // make a new request
        // var request = new XMLHttpRequest();

        // // listen for the request response
        // request.addEventListener("load", responseHandler);

        // // ready the system by calling open, and specifying the url
        // request.open("GET", "/posts.json");

        // // send the request
        // request.send();



    }


    render(){
        console.log( "rendering", this.state.products);

        // console log the posts, this should be an array of objects
        const products = this.state.products.map((product, index)=>{
            console.log(product)
          return (

            <div key={index}>

            <div className="card float-left  mb-5 justify-content-around" >
             <img src={product.image_url} className="card-img-top "/>

              <div className="card-body">
                <h5 className="card-title d-inline"> {product.name}  <span className="float-right pl-2"> {product.price}$</span></h5>


              </div>

             </div>

</div>


          );

        });

        return(
            <div style={{ margin: "0 auto" , textAlign: "center"  }}>
                my appp
                <button onClick={()=>{ this.getProducts() }}>
                  Click to See Products
                </button>
                <div style={{ padding: 60 }}>
                 <Grid
  container
  direction="row"
  justify="space-around"
  alignItems="center"

>
                {products}
           </Grid>
</div>
            </div>
        );
    }

}

export default App;