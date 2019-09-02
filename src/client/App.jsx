import React from 'react';
import { hot } from 'react-hot-loader';

import Counter from './components/counter/counter';
import Form from './components/form/form';
import Search from './components/search/search';
import Product from './components/product/product';
import Cart from './components/cart/cart';
import styles from './style.scss';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            input:"",
            products:null,
            selectedProduct:null,
            cartList:[]
        };
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.selectProduct = this.selectProduct.bind(this);
        this.addToCart = this.addToCart.bind(this);
    }

    onChangeHandler(event){
        this.state.input = event.target.value;
        this.setState({input:this.state.input});
        console.log(this.state.cartList)
    }

    componentDidMount(){
        let reactClass = this
        var responseHandler = function() {
            reactClass.state.products = JSON.parse(this.responseText);
            reactClass.setState({products:reactClass.state.products});
        };
        var request = new XMLHttpRequest();
        request.addEventListener("load", responseHandler);
        var url = "/products";
        request.open("GET", url);
        request.send();
    }


    selectProduct(event){
        this.state.selectedProduct = this.state.products.products.filter(x=>x.name === event.target.innerText)[0]
        this.setState({selectedProduct:this.state.selectedProduct})
        console.log(this.state.selectedProduct)
    }

    addToCart(event){
        this.setState({cartList:[...this.state.cartList,this.state.selectedProduct]})
    }

    render() {

        return (
            <div className={styles["main-container"]}>
                <Search input={this.state.input} onChangeHandler={this.onChangeHandler} products={this.state.products} filterSearch={this.filterSearch} selectProduct={this.selectProduct}/>
                <Product selectedProduct={this.state.selectedProduct} addToCart={this.addToCart}/>
                <Cart cartList={this.state.cartList}/>
            </div>
        );
    }
}

export default hot(module)(App);