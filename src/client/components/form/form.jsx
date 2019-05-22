import React from 'react';
import Product from '../product/product';

// import styles from './style.scss';

class Form extends React.Component {
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
      <div>
        <input onChange={this.onChangeHandler} value={this.state.searchForm} placeholder="search" />
        <button onClick={this.onClickHandler}>Search</button>
        <ListItems queryData={this.state.queryData} showProductHandler={this.showProductHandler}/>
        <Product product={this.state.product} />
      </div>
    );
  }
}

// class ShowItems extends React.Component {
//   onClickHandler(event) {
//     console.log('im id: ', this.props.id);
//     alert('working');
//   }
//   // showProductInfo {
//   //   fetch()
//   // }
//   render() {
//     return(
//       <button onClick={this.onClickHandler} value={this.props.id}>show</button>
//     );
//   }
// }

class ListItems extends React.Component {
  render() {
    // let listItems;
    // if(this.props.queryData.products && this.props.queryData.products.length > 0){
    //   listItems = this.props.queryData.products.map((item, index) => {
    //     return (
    //       <div key={index}>
    //         <li>{item.name}</li>
    //       </div>
    //     );
    // });
    // }
    const {queryData} = this.props;
    return (
      <div>
        {queryData.length !== 0
          ? queryData.map((element, index) => (
              <div key={index}>
                <p>{element.name}</p>
                <button onClick={this.props.showProductHandler} id={element.id}>
                  show
                </button>
              </div>
            ))
          : null}
      </div>
    );
  }
}

export default Form;
