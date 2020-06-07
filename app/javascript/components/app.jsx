import React from 'react';
//import Form from './form'
import ProductList from './productList'


class App extends React.Component {
  render(){
      return (
        <div className="app">
          <p>my app</p>
          <div className="content">
            <ProductList/>
          </div>
        </div>
      );
  }
}

export default App;