import React from 'react';
import Search from './components/search/search';
import axios from 'axios';
import Product from './components/product/product';
import Cart from './components/cart/cart';


class App extends React.Component {
  constructor(){
    super();

    this.state = {
    products: [],
    searchProducts: [],
    selectedProduct: null,
    cart: [],
    input: ''
  };
}

getProducts(){
  const url = '/products.json';

  axios.get(url)
    .then((response) => {

      const data = response.data
      this.setState({ products : data })
      this.setState({ searchProducts : data })

    }).catch((error)=>{

      console.log(error);
    })
}

componentDidMount() {
  this.getProducts();
}


getSelectedProduct(event) {
  const url = '/products.json';

  axios.get(url)
    .then((response) => {
  
      const data = response.data
      this.setState({ selectedProduct : event.target.value })

    }).catch((error)=>{

      console.log(error);
    })
}
 

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
              <Search searchProducts = {this.state.searchProducts}/>
          </div>
          <div className="col">
              <Product setSelectedProduct={(event) => {this.setSelectedProduct(event)}} product={this.state.selectedProduct} />
          </div>
          <div className="col">
              <Cart />
          </div>
        </div>
      </div>
    );
  }
}

export default App;