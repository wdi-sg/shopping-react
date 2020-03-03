import React from 'react'
import axios from 'axios';
import Product from './components/product'
import Cart from './components/cart';
import Search from './components/search';

export default class App extends React.Component{
    constructor(){
        super(),
        this.state = {
            products: [],
            product: {},
            value: "",
            cart: []
        }
    }
    componentDidMount(){
        this.getProducts();
    }

    changeInput = (currentInput) => {
        this.setState({ value: currentInput });
        this.getProducts();
    }

    getProducts = () => {
          const url = '/products.json';
          axios.get(url)
            .then((response) => {
              const data = response.data;
              let products = data.filter((product) => {
                return (product.name.toLowerCase()).includes((this.state.value).toString().toLowerCase()) ;
            });
              this.setState({ products: products });
            }).catch((error)=>{
              console.log(error);
            })
    }

    addCart = ()=>{
        let product = this.state.product;
        const cart = [product, ...this.state.cart];
        this.setState({ cart: cart });
    }
    removeProduct = (index) =>{
        let cart = this.state.cart;
        cart.splice(index,1);
        this.setState({ cart: cart });
    }
    showProduct = (event) =>{
        let product = this.state.products[event];
        this.setState({ product: product });
    }
    filterProducts = () =>{
        const data = this.state.products;
        const products = data.sort((a, b) => (parseFloat(a.price).toFixed(2) >= parseFloat(b.price).toFixed(2)) ? 1 : -1);
        this.setState({ products: products });
    }
    render(){
        return(
            <div className="container">
                <div className="row">
                    <Search filterProducts={this.filterProducts} products={this.state.products} changeInput={this.changeInput} showProduct={this.showProduct} value={this.state.value}/>
                    <Product product={this.state.product} addCart={this.addCart} />
                    <Cart product={this.state.cart} removeProduct={this.removeProduct}/>
                </div>
            </div>
            );
    }
}