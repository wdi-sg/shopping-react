import React from 'react';
import axios from 'axios';
import Products from '../components/Products';
import Carts from '../components/Carts';
import Search from '../components/Search';

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            products: [],
            cart: [],
            selectedProduct: null,
            selectedProductId: null
        }
    }

//componentDidMount() is like on load (from Jessica)
    componentDidMount(){
        this.getProducts();
    }

// ajax part for upon clicking, it'll show products
    getProducts(){
        // console.log('after clicking Get products');
        const url = '/products.json';

        axios.get(url)
        .then((response) => {

            const data = response.data

            this.setState({ products: data })

            }).catch((error)=>{
            console.log(error);
        })
    }


// this method will update selectedProduct and also selectedProductId so we can use it later
    displaySelectedProduct(index) {
        this.setState({ selectedProduct: this.state.products[index], selectedProductId: index })
    }

    updateCurrentCart(index) {
        let item = this.state.products[index];
        //... means make a copy what's currently inside of this.state.cart
        this.setState({ cart: [...this.state.cart, item] })
    };



    showProduct = (event) =>{
        let product = this.state.products[event];
        this.setState({ selectedProduct: product });
    }


    render() {
        console.log(this.state.cart)

        const product = this.state.products.map((product, index)=>{
            return (
                <div key={index}>
                    <button value={index} onClick={e => {
                        this.displaySelectedProduct(e.target.value)
                    }}>{product.name}</button>
                </div>
            );
        });

    let display = "";
        if(this.state.selectedProduct){
            display = <Products selectedProduct = {this.state.selectedProduct}
                                sendToCart = {(productId) => {this.updateCurrentCart(productId)} }
                                productId={this.state.selectedProductId}
                    />
        }
        // console.log('initially it looks like this in console.log');

        let displayCart = "";
            if(this.state.cart) {
                displayCart = <Carts productInCarts = {this.state.cart}/>
            }


        return (
            <div>
                <h2>Products</h2>
                <Search products={this.state.products}
                        changeInput={this.changeInput}
                        showProduct={this.showProduct}
                        value={this.state.value}
                />
                <br/>
                <br/>
                <ol>
                    {product}
                </ol>
                {display}
                {displayCart}
            </div>
            )
    }
}



export default App;