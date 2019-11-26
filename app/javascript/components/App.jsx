import React from 'react';
import axios from 'axios';
import styles from './style';
import Search from './Search/Search';
import Product from './Product/Product';
import Cart from './Cart/Cart';

class App extends React.Component{
    constructor(){
        super();
        this.state = {
            searchResults:[],
            product: {},
            cart: []
        }
    }

    onSearchQuery(event){
        let query = event.target.value;
        const url = '/products/'+query+'.json';
        const whenDone = response => {this.setState({ searchResults: response.data })};
        const whenError = error => console.log(error);
        axios.get(url).then(whenDone).catch(whenError);
    }
    viewDetails(product){
        this.setState({product})
    }

    addToCart(product){
        this.setState({cart: [product,...this.state.cart]})
    }

    removeItem(i){
        let cart = this.state.cart;
        cart.splice(i,1);
        this.setState({cart})
    }

    render() {
        return (<div className="container d-flex text-center">
            <div className="row w-100">
                <div className="col-4">
                    <h1>Search</h1>
                    <Search
                        onSearchQuery={(e)=>{this.onSearchQuery(e)}}
                        searchResults={this.state.searchResults}
                        viewDetails={(product)=>{this.viewDetails(product)}}
                    />
                </div>
                <div className="col-4">
                    <h1>Product</h1>
                    <Product
                        product={this.state.product}
                        addToCart={(product)=>{this.addToCart(product)}}
                    />
                </div>
                <div className="col-4">
                    <Cart
                        cart={this.state.cart}
                        removeItem={(i)=>{this.removeItem(i)}}
                    />
                </div>
            </div>
        </div>);
    }
}

export default App;