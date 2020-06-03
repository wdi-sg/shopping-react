import React from 'react';
import axios from 'axios';

class Product extends React.Component {
    constructor(){
      super();

      this.state = {
        products:[]
      };
    }

    handleClick(){

      console.log("hey wowwww")


      const url = '/products.json';

      const runWhenDone = (response) => {

        const data = response.data
        console.log("**************")
        console.log("**************")
        console.log("**************")
        console.log("**************")
        console.log( data );

        this.setState({ products: data })

      }

      const whenError = (error) => {
          console.log("eerror", error)
      }

      axios.get(url).then(runWhenDone).catch(whenError)
    }

    render(){

        const products = this.state.products.map((product)=>{
            return (<div className="product">
                <img src={product.url}/>
                <p>Product Name: {product.name}</p>
                <p>Product description: {product.description}</p>
                <p>Product Price: ${product.price}</p> <button>add to cart</button>
            </div>);
        });
        return (<div className="col">
        <p>Product list:</p>
        <p>
            <button onClick={()=>{
                this.handleClick();
            }}>
                get list of Products from db
            </button>
        </p>
        <div>
            {products}
        </div>
        </div>);
    }
}

export default Product;