import React from 'react';
import Product from './product';
import Search from './search';
import Cart from './cart';

class Main extends React.Component {
    constructor(){
      super();

      this.state = {
        products:[],
        cart:[],
      };
    }

    addCart(){
        // this.setState({cart:event.target.value})
        var item = event.target.value;
        this.state.cart.push(item);
        this.setState({cart:this.state.cart})
        console.log(event.target.value);
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
            <Cart cart={this.state.cart}/>
            </div>
            </div>
        </div>);
    }
}

export default Main;