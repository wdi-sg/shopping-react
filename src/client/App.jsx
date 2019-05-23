import React from 'react';
import { hot } from 'react-hot-loader';
import Form from './components/form/form';
import Product from './components/product/product';


class App extends React.Component {
  constructor() {
    super();
    this.timeOut = null;
    this.state = {
      searchForm: '',
      queryData: [],
      product: {id: '', name: '', price: '', description: ''}
    };
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onClickHandler = this.onClickHandler.bind(this);
    this.showProductHandler = this.showProductHandler.bind(this);
  }

  onChangeHandler(event) {
    this.timeOut ? clearTimeout(this.timeOut) : null;
    this.setState({
      searchForm: event.target.value
    });
    this.timeOut = setTimeout(() => {
      this.searchItemByName();
    }, 1000);
  }

  onClickHandler() {
    this.searchItemByName();
  }

  searchItemByName() {
    fetch(`/searchItems/${this.state.searchForm}`, {
      method: 'GET'
    })
      .then((response) => response.json())
      .then((json) => this.setState({queryData: json.product}));
  }

  showProductHandler(event) {
    let id = event.target.id;
    let index = this.state.queryData.findIndex(p => p.id == id);
    let selectedItem = this.state.queryData[index];


    this.setState(prevState => ({
      product: {
          ...prevState.product,
          id: selectedItem.id,
          name: selectedItem.name,
          price: selectedItem.price,
          description: selectedItem.description
      }
      }));
  }

  



  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-8">
            <Form 
              onChangeHandler={this.onChangeHandler}
              onClickHandler={this.onClickHandler}
              showProductHandler={this.showProductHandler}
              searchForm={this.state.searchForm}
              queryData={this.state.queryData}
            />
          </div>
          <div className="col-4">
            <Product 
              product={this.state.product}
            />  
          </div>
        </div>
      </div>
    );
  }
}

export default hot(module)(App);