import React from 'react';
import Search from './components/search/search';
import axios from 'axios';
import Product from './components/product/product';
// import Cart from './components/cart/cart';


class App extends React.Component {
  constructor(){
    super();

    this.state = {
    products: [],
    cart: [],
    selectedProduct: null
  };
}


getProducts(){
  const url = '/products.json';

  axios.get(url)
    .then((response) => {

      const data = response.data
      this.setState({ products : data })

    }).catch((error)=>{

      console.log(error);
    })
}

componentDidMount() {
  this.getProducts();
}

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
              <Search />
          </div>
          <div className="col">
              <Product products = {this.state.products} />
          </div>
        </div>
      </div>
    );
  }
}


export default App;