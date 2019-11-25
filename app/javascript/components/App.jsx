import React from 'react';
import Search from './Search';
import Product from './Product';
import Cart from './Cart';
import axios from 'axios';

const style = {
    display: "flex",
    justifyContent: "space-around"
}

class App extends React.Component {
    state = {
        products: [],
        selectedProduct: null,
        cartItems: []
    }

    componentDidMount() {
        axios.get('http://localhost:3000/products.json')
        .then(response => this.setState({products: response.data}))
    }

    selectProduct(e) {
        const {products} = this.state;
        const newSelectedProduct = products.filter(product => product.name === e.target.innerText)[0];
        this.setState({selectedProduct: newSelectedProduct});
      }

    addToCart(e){
        const {cartItems, selectedProduct} = this.state;
        const newCartItems = cartItems.slice();
        newCartItems.push(selectedProduct);
        this.setState({cartItems: newCartItems});
    }
    
    render() {
        const {products, selectedProduct, cartItems} = this.state;
        return (
            <div style={style}>
                <Search products={products} selectProduct={e => this.selectProduct(e)}/> 
                <Product selectedProduct={selectedProduct} addToCart={e => this.addToCart(e)}/> 
                <Cart cartItems={cartItems} /> 
            </div>
        )
    }
}

export default App;
