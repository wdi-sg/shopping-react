import React from 'react';
import Product from './product';
import Search from './search';
import Cart from './cart';
import axios from 'axios';

class Main extends React.Component {
    constructor(){
      super();

      this.state = {
        products:[],
        cart:[],
        cartPrice:[]
      };
    }

    addCart(){
        // this.setState({cart:event.target.value})
        var idOfItem = (parseInt(event.target.id) - 1)
        const url = '/products.json';
        const runWhenDone = (response) => {
        const data = response.data
        console.log("**************")
        console.log("**************")
        console.log("**************")
        console.log("**************")
        console.log( data );
        // this.setState({ products: data })
        this.state.cart.push(data[idOfItem]);
        this.state.cartPrice.push(parseFloat(data[idOfItem].price));
        console.log(this.state.cartPrice)
        this.setState({
            cart: this.state.cart,
            cartPrice: this.state.cartPrice
        })
        console.log(this.state.cart)
        }

        const whenError = (error) => {
            console.log("eerror", error)
        }
        axios.get(url,{params:"id",id:idOfItem}).then(runWhenDone).catch(whenError);
        // this.setState({cart:this.state.cart})
    }

    render(){
        return (<div className="container">
            <div className="row">
            <div className="col">
            <Search/>
            </div>
            <div className="col">
            <Product addCart={()=>{this.addCart()}}/>
            </div>
            <div className="col">
            <Cart cart={this.state.cart} cartPrice={this.state.cartPrice}/>
            </div>
            </div>
        </div>);
    }
}

export default Main;