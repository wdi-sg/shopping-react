import React from 'react';
import { hot } from 'react-hot-loader';

import Search from './components/search/search';
import Product from './components/product/product';
import Cart from './components/cart/cart'

import './style.scss';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
        allProducts: null,
        searchResults: [],
        selectedProduct: null
    };

    this.seeProduct= this.seeProduct.bind(this);
    this.filterResults = this.filterResults.bind(this);
  }

  componentDidMount(){
    fetch("/products")
    .then(response => response.json())
    .then((result) => {
        this.setState({allProducts: result.products})
    },
    (error) =>{
        console.log(error)
    })

  }

  filterResults(event) {
    console.log(event.keyCode)
    if (event.keyCode === 13) {
        let filteredResults = [];
        const searchTerm = event.target.value;

        this.state.allProducts.map( product => {
            if (product.name.toLowerCase().includes(searchTerm.toLowerCase())){
                filteredResults.push(product);
            }
        })

        this.setState({searchResults: filteredResults})
    }
  }

    seeProduct(event){
        console.log(event.target)
        const productLocation = parseInt(event.target.id)-1;
        console.log(productLocation)
        const product = this.state.allProducts[productLocation];
        this.setState({selectedProduct: product})
    }


    render() {
    return (
        <div className={'row justify-content-center'}>
            <Search filterResults={this.filterResults} seeProduct={this.seeProduct} searchResults={this.state.searchResults} />
            <Product product={this.state.selectedProduct} />
            <Cart />
        </div>
    );
    }
}

export default hot(module)(App);