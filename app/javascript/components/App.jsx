import React from 'react';
import axios from 'axios';
import styles from './style';
import Search from './Search/Search';
import Product from './Product/Product';
import Cart from './Cart/Cart';
import Paper from '@material-ui/core/Paper';

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
        return (<div className="container d-flex justify-content-around text-center">
            <div className="d-flex justify-content-around row w-100">
                <Paper className="col-3 m-1 bg-light">
                    <h1>Search</h1>
                    <hr/>
                    <Search
                        onSearchQuery={(e)=>{this.onSearchQuery(e)}}
                        searchResults={this.state.searchResults}
                        viewDetails={(product)=>{this.viewDetails(product)}}
                    />
                </Paper>
                <Paper className="col-4 m-1 bg-light">
                    <h1>Product</h1>
                    <hr/>
                    <Product
                        product={this.state.product}
                        addToCart={(product)=>{this.addToCart(product)}}
                    />
                </Paper>
                <Paper className="col-3 m-1 bg-light">
                    <Cart
                        cart={this.state.cart}
                        removeItem={(i)=>{this.removeItem(i)}}
                    />
                </Paper>
            </div>
        </div>);
    }
}

export default App;