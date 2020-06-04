import React from 'react';
import axios from 'axios';

class Product extends React.Component {
    constructor(){
      super();

      this.state = {
        products:[],
        cart:[],
      };
    }

    handleClick(){

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

    addToCartButton(event){
        console.log(event.target.id);
        console.log(event.target.name);
        var holder = this.props.name
        console.log("clicked add to cart button product clicked is: ", holder)
    }

    render(){

        const products = this.state.products.map((product, index)=>{
            return (<div className="product">
                <li key={index}
                    id={product.id}
                    name={product.name}
                    description={product.description}
                    price={product.price}
                    >
                <img src={product.url}/>
                <p>Product Name: {product.name}</p>
                <p>Product description: {product.description}</p>
                <p>Product Price: ${product.price}</p> <button onClick={(event)=>{this.props.addCart(event)}} id={product.id} name={product.name} price={product.price}>add to cart</button>
                </li>
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