import React from 'react';
import styles from './style';
import axios from 'axios';
import SearchResult from './SearchResult/SearchResult';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';

class Search extends React.Component {

    constructor() {
        super();
        this.state = {
            products: [],
            selectedProduct: null,
            cart: []
        }
    }

    getAllPosts(){

        const url = '/products.json';
      
        axios.get(url)
          .then((response) => {
      
            const data = response.data
            // console.log("data", data);
      
            this.setState({ products: data })
      
          }).catch((error)=>{
            console.log(error);
          })
      }
      
      inputChangeHandler(event) {
          const url = '/products/search';
      
          let params = {
            params: {
              name: event.target.value
            }
          };

          axios.get(url, params)
            .then((response) => {
        
              const data = response.data
        
              this.setState({ products: data })
        
            }).catch((error)=>{
              console.log(error);
            })
  
      }

      clickHandler(product) {
        this.setState({selectedProduct: product});
      }

      addToCart(selectedProduct){
        let cart = this.state.cart;

        if (selectedProduct) {
          this.setState({cart: [...cart, selectedProduct]})
        }
      }

    render() {

        let products = this.state.products;

        products = products.map(product => (
          <SearchResult product={product} key={product.id} clicked={()=>{this.clickHandler(product)}}/>
        ));

        return (
            <div className={styles.search}>
                <Cart cart={this.state.cart}/>
                <Product product={this.state.selectedProduct} clicked={()=>{this.addToCart(this.state.selectedProduct)}} />
                <h1>Search</h1>
                <button onClick={()=>{ this.getAllPosts() }}>
                    View All Products
                </button>
                <label htmlFor="search"></label>
                <input id="search" type="text" onChange={(event)=>{this.inputChangeHandler(event)}}/>
                <h2>results:</h2>
                {products}
            </div>
        );
    }

}

export default Search;