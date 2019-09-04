import React from 'react';
import { hot } from 'react-hot-loader';

import List from './components/list/list'
import Show from './components/show/show'
import NewProduct from './components/newProduct/newProduct'


class App extends React.Component {
  constructor() {
    super();

    this.state = {
        showProduct: '',
        searchProduct: ''
    };
  }


  receiveHandler(product){
    this.setState({showProduct: product})

  }

  render() {


    return (
      <div className = 'container-fluid'>
        <div className='card-header text-center'>
            <h1>Shopping List</h1>
        </div>
        <div>
            <NewProduct />
        </div>
        <div className='row'>
            <div className='col-4'>
                <List sendHandler={(product)=>{this.receiveHandler(product)}} item={this.state.searchProduct} searchShowHandler={(searchProduct)=>{this.receiveSearchProducts(searchProduct)}}/>
            </div>
            <div className='col-4'>
                <Show product={this.state.showProduct}/>
            </div>
            <div className='col-4'>
                <p></p>
            </div>
        </div>
      </div>
    );
  }
}

export default hot(module)(App);