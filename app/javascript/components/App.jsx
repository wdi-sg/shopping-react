import React, { Component } from 'react'
import Search from './Search.jsx'
import Product from './Product.jsx'
import Cart from './Cart.jsx'
import axios from 'axios';
export class App extends Component {
    constructor(){
        super()
        this.state = {
            products: [],
            selectedProduct: null,
            cartItems: []

        }
    }

    componentDidMount() {
        axios.get('http://localhost:3000/products.json')
        .then(response => {
          
          this.setState({products: response.data})
        })
      }
      selectProduct(e) {
       
        this.state.selectedProduct = this.state.products.filter(product=>product.name === e.target.innerText)[0]
        this.setState({selectedProduct:this.state.selectedProduct})
    
      }

      addToCart(e){
       this.state.cartItems.push(this.state.selectedProduct)
       this.setState({cartItems: this.state.cartItems})
      }
    
    render() {
        
        return (
            <div className="container">
                <div className="row">
                
                    <div className="col-4"> <Search products={this.state.products} selectProduct={(e) => this.selectProduct(e)}/> </div>
                    <div className="col-4"> <Product selectedProduct={this.state.selectedProduct} addToCart={(e)=> this.addToCart(e)}/> </div>
                    <div className="col-4"> <Cart cartItems={this.state.cartItems} /> </div>

                </div>
            
            </div>
        )
    }
}

export default App
