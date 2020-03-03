import React from 'react';
import axios from 'axios';
import Products from '../components/Products';
import Carts from '../components/Carts';

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


// how to onclick and check the index of selected item matches the one in product?
    displaySelectedProduct(index) {
        this.setState({ selectedProduct: this.state.products[index], selectedProductId: index })
    }

    updateCurrentCart(index) {
        //how does it get hold of the index of the selected item
        let item = this.state.products[index];
        //... means make a copy what's currently inside of this.state.cart
        this.setState({ cart: [...this.state.cart, item] })
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

        // console.log('initially it looks like this in console.log');

        return (
            <div>
                <h2>Products</h2>
                <button onClick={() => {this.getProducts()}}> Get products </button>
                <ol>
                    {product}
                </ol>
                <Products selectedProduct = {this.state.selectedProduct}
                          sendToCart = {(productId) => {this.updateCurrentCart(productId)} }
                          productId={this.state.selectedProductId}
                />
                <Carts/>
            </div>
            )
    }
}



export default App;