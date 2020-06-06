import React from 'react'
import axios from 'axios';
import Product from './product';
import Cart from './cart';

class Search extends React.Component{

constructor(){
      super();

      this.state = {
        products:[],
        value:"",
        product:{},
        cart:[]
    };
  }

  getProducts(){

  const url = '/products.json';

  axios.get(url)
    .then((response) => {

      const data = response.data
      var reqProducts = data.filter((product) => {
        return (product.name.toLowerCase()).includes(this.state.value.toLowerCase()) ;
    });

      this.setState({ products: reqProducts })

    }).catch((error)=>{
      console.log(error);
    })
  }


handleInput=(event)=>{
    this.setState({
        value: event.target.value
    });
}
addCart=()=>{
    let product = this.state.product;
    const cart = [product, ...this.state.cart];
    this.setState({cart: cart});
}
showProducts(event){
    let product = this.state.products[event.target.value];
         this.setState({ product: product })

}
<div>
                <button onClick={(event)=>{ this.showProducts(event) }} value= {index}>name: {product.name}</button>
              </div>



    render(){

      const products = this.state.products.map((product, index)=>{
          return (
            <div>
            {product.name}


            </div>);
          });
      let displayProduct = "";
         if(Object.keys(this.state.product).length != 0){
           displayProducts = <Product product={this.state.product} addCart={this.addCart}/>;
         }
        return(
          <div>
            <h1>Search</h1>
            <div>
              <input value={this.state.value} onChange={(event)=>{this.handleInput(event)}}>
              </input>
            </div>
              <div>
                <button onClick={()=>{ this.getProducts() }}>Search</button>
              </div>
              {products}
              {displayProducts}
              <Cart product={this.state.cart} />
          </div>

          );
    }
 }
 export default Search;