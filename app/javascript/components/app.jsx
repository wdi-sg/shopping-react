import React from 'react';
import axios from 'axios';
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
          return (
            <div>
            <div className="card float-left justify-content-around" style="width: 18rem;">
             <img src={product.img_url} className="card-img-top" style="width: auto; height:200px;" alt="..." />

              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>

                <p className="card-text">{product.price}</p>
              </div>
             </div>
             </div>


          );
        });

        return(
            <div>
                my appp
                <button onClick={()=>{ this.getProducts() }}>
                  Click to See Products
                </button>
                {products}

            </div>
        );
    }

}

export default App;