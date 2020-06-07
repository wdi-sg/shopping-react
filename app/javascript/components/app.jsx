import React from 'react';
//import Form from './form'
import ProductList from './productList'


class App extends React.Component {
  render(){
      return (
        <div className="app">
          <div className="app-content">
            <ProductList/>
            <div className="container">
              <h3>PRODUCT</h3>
            </div>
            <div className="container">
              <h3>CART</h3>
            </div>
          </div>
        </div>
      );
  }
}

export default App;