import React from 'react';
import axios from 'axios';

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            products: [],
            cart: [],
            selectedProduct: null
        }
    }

    getProducts(){
        console.log('banananna');
        const url = '/products.json';

        axios.get(url)
        .then((response) => {

            const data = response.data

            this.setState({ products: data })

            }).catch((error)=>{
            console.log(error);
        })
    }

    render() {

        const product = this.state.products.map((product, index)=>{
            return (
                        <li key={index}>{product.name}</li>
                );
        });

        return (
            <div>
                <h2>Products</h2>
                <button onClick={() => {this.getProducts()}}> Get products </button>
                <ol>
                    {product}
                </ol>
            </div>
            )
    }
}



export default App;