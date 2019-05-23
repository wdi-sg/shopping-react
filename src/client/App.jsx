import React from 'react';
import { hot } from 'react-hot-loader';

import Search from './components/search/search';
import Product from './components/product/product';
import Cart from './components/cart/cart';

import styles from './style.scss';



class App extends React.Component {
    constructor() {
        super();
        this.state = {
            items: [],
            currentProduct: [{}],
            shoppingCart: [],
            subTotal: 0,
            total: 0
        };
        this.editAjax = this.editAjax.bind(this);
        this.showProduct = this.showProduct.bind(this);
        this.addToCart = this.addToCart.bind(this);
        this.calculate = this.calculate.bind(this);
    }

    componentDidMount(){
        fetch('/products')
        .then(response => {
            console.log(response);
            return response.json();
        })
        .then(json => {
            console.log('json', json.products);
            this.setState({items: json.products})
        })
    }

    calculate(item) {
            let itemPriceNoDollar = Number(item.price.replace(/[^0-9.-]+/g, ""))
            this.state.subTotal = this.state.subTotal + itemPriceNoDollar;
            this.setState({subTotal: this.state.subTotal});
            console.log("SUBTOTAL LOOK HERE", this.state.subTotal)
            this.state.total = (this.state.subTotal + 7) * 1.07;
            this.setState({total: this.state.total});
            console.log("TOTAL LOOK HERE", this.state.total);
    }

    addToCart(currentProduct) {
        console.log("LOOK HERE AT CURRENT PRODUCT");
        console.log(currentProduct);
        this.state.shoppingCart.push(currentProduct);
        this.setState({shoppingCart: this.state.shoppingCart});
        console.log("UPDATED SHOPPING CART", this.state.shoppingCart);

        this.calculate(currentProduct);
    }

    showProduct(item) {
        // console.log("HERE HERE HERE LA");
        // console.log(item);
        console.log("HERE HERE HERE LALA");
        console.log(this.state.currentProduct);
        this.state.currentProduct.splice(0,1, item);
        console.log("HERE HERE HERE LALA AFTER SPLICE");
        console.log(this.state.currentProduct)
        // this.state.currentProduct.push(item);
        this.setState({currentProduct: this.state.currentProduct});
        console.log("HERE LOOK HERE",this.state.currentProduct)
    }

    editAjax(name, id) {
        console.log(name);
        console.log(id);
        fetch('/products/edit',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify({
                name: name,
                id: id
            })
        })
        .then(response => console.log(response))
        .then(json => console.log(json))
    }

  render() {
    return (
        <div className={styles.search}>
                <div className="row">
                    <div className="col">
                        <h4>Search</h4>
                     <Search items={this.state.items} editAjax={this.editAjax} showProduct={this.showProduct} />
                    </div>
                    <div className="col">
                        <h4>Product</h4>
                        <Product currentProduct={this.state.currentProduct[0]} addToCart={this.addToCart}/>
                    </div>
                    <div className="col">
                        <h4>Cart</h4>
                        <Cart shoppingCart={this.state.shoppingCart} subTotal={this.state.subTotal} total={this.state.total} />
                    </div>
                </div>
        </div>
    );
  }
}

export default hot(module)(App);