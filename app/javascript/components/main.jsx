import React from 'react';
import Product from './product';
import Search from './search';
import Cart from './cart';

class Main extends React.Component {
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
            <Cart/>
            </div>
            </div>
        </div>);
    }
}

export default Main;