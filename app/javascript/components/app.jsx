import React from 'react';
//import Form from './form'
import ProductList from './productList'
import Product from './product.jsx';


class App extends React.Component {
  render(){
      return (
        <div className="app">
          <ProductList/>
        </div>
      );
  }
}

export default App;