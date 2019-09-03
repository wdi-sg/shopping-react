import React from 'react';
import { hot } from 'react-hot-loader';

import Search from './components/search/search'
import List from './components/list/list'
import Show from './components/show/show'


class App extends React.Component {
  constructor() {
    super();

    this.state = {
        showProduct: '',
        searchProduct: ''
    };
  }

  receiveSearch(value){
    this.setState({searchProduct: value})
    this.clearState()
  }

  receiveHandler(product){
    this.setState({showProduct: product})
    this.clearState()
  }

  render() {


    return (
      <div className = 'container-fluid'>
        <div className='card-header text-center'>
            <h1>Shopping List</h1>
        </div>
        <div className='row'>
            <div className='col-8 offset-2'>
                <Search searchItem={(value)=>{this.receiveSearch(value)}}/>
            </div>
        </div>
        <div className='row'>
            <div className='col-4'>
                <List sendHandler={(product)=>{this.receiveHandler(product)}} item={this.state.searchProduct} searchShowHandler={(searchProduct)=>{this.receiveSearchProducts(searchProduct)}}/>
            </div>
            <div className='col-4'>
                <Show product={this.state.showProduct}/>
            </div>
            <div className='col-4'>
            </div>
        </div>
      </div>
    );
  }
}

export default hot(module)(App);