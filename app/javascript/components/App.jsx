import React, { Component } from 'react'
import Search from './Search.jsx'
import Product from './Product.jsx'
import Cart from './Cart.jsx'
import axios from 'axios';
export class App extends Component {
    constructor(){
        super()
        this.state = {
            products: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:3000/products.json')
        .then(response => {
          console.log(response.data);
          this.setState({products: response.data})
        })
      }
    
    render() {
        
        return (
            <div className="container">
                <div className="row">
                
                    <div className="col-4"> <Search products={this.state.products}/> </div>
                    <div className="col-4"> <Product /> </div>
                    <div className="col-4"> <Cart /> </div>

                </div>
            
            </div>
        )
    }
}

export default App
