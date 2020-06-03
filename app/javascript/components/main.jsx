import React from 'react';
import Product from './product';
import Search from './search';
import Cart from './cart';

class Main extends React.Component {
    constructor(){
      super();

      this.state = {
        products:[],
        cart:["camera"],
      };
    }
    render(){
        return (<div className="container">
            <div className="row">
            <div className="col">
            <Search/>
            </div>
            <div className="col">
            <Product/>
            </div>
            <div className="col">
            <Cart cart={this.state.cart}/>
            </div>
            </div>
        </div>);
    }
}

export default Main;