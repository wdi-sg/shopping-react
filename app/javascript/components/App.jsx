import React from 'react';
import axios from 'axios';
import styles from './style.scss';
import Search from './Search/Search';
import Product from './Product/Product';
import Cart from './Cart/Cart';

class App extends React.Component{
    constructor(){
        super();
        this.state = {
            query:"",
            products: [],
            cart: []
        }
    }

    searchProducts(){
        const url = '/products.json';
        const whenDone = (response) => {
            let {query} = this.state
            this.setState({ products: response.data.filter(x=>x.name.includes(query))})
        }
        const whenError = (error)=>{
            console.log(error);
        };
        axios.get(url)
        .then(whenDone)
        .catch(whenError)
    }

    onSearchQuery(event){
        let query = event.target.value;
        this.setState({query})
    }

    addToCart(i){
        this.setState({cart: [i,...this.state.cart]})
    }

    render() {
        return (<div className="container d-flex">
            <div className="col">
                <h1>Search</h1>
                <Search
                    searchProducts={()=>{this.searchProducts()}}
                    onSearchQuery={(event)=>{this.onSearchQuery(event)}}
                />
            </div>
            <div className="col">
                <h1>Product</h1>
                <Product
                    products={this.state.products}
                    addToCart={(i)=>{this.addToCart(i)}}
                />
            </div>
            <div className="col">
                <Cart state={this.state}/>
            </div>
        </div>);
    }
}

export default App;