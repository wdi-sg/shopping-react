import React from 'react';

import styles from './style.scss';
import Product from '../product/product';

class Form extends React.Component {
  constructor() {
    super();
    this.changeHandler = this.changeHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
    this.enterHandler = this.enterHandler.bind(this);
    this.viewItemHandler = this.viewItemHandler.bind(this);
    this.addItemToCartHandler = this.addItemToCartHandler.bind(this);
    this.removeItemFromCartHandler = this.removeItemFromCartHandler.bind(this);
    this.state = {
      items: [],
      search: '',
      submittedSearch: '',
      product: [],
      cart: [],
    };
  }

  changeHandler(event){
    this.setState({search: event.target.value})
  }

  enterHandler(event){
    // console.log(event.keyCode)
    if (event.keyCode === 13) {
      this.submitHandler();
    }
  }

  submitHandler(event){
    // console.log(this.state.search)
    this.setState({submittedSearch: this.state.search, items: []})
    this.makeAjaxCall();
  }

  makeAjaxCall(){
    // console.log("hello");

    //copy the value of this in order to refer to it in another way.
    // console.log( "set state function");
    // console.log( this.setState );

    // get a hold of component for react
    var reactThis = this;

    var reqListener = function(){
      // console.log("hello");
      // console.log(this.responseText);
      // console.log("hello");

      const data = JSON.parse( this.responseText );

      reactThis.setState({items:data.products})

      // this keyword doesnt refer to component
      //this.setState({items:this.responseText})
    }

    var oReq = new XMLHttpRequest();
    oReq.addEventListener("load", reqListener);
    oReq.open("GET", "/products");
    oReq.send();
    // console.log('req sent')
  }

  viewItemHandler(event){
    console.log("viewing", event.target.value)
    // let chosen = this.state.product.push(this.state.items[event.target.value])
    this.state.product = []
    this.state.product.push(this.state.items[event.target.value])
    console.log([this.state.product])
    this.setState({product: this.state.product })
  }

  addItemToCartHandler(event) {
    this.state.cart.push(this.state.product[0])
    this.setState({cart: this.state.cart})
  }

  removeItemFromCartHandler(event) {
    let index = event.target.value
    this.state.cart.splice(index, 1)
    this.setState({cart: this.state.cart})
  }

  render() {
    let itemList = this.state.items.map((item, index)=>{
      // console.log(item.name)
      // console.log(this.state.search)
      // console.log(item.name.toLowerCase().includes(this.state.search))
      // console.log(item.name.includes(this.state.search)
      if (item.name.toLowerCase().includes(this.state.submittedSearch)) {
        return (
          <li key={index}>
            <p>
              {item.name} <br/>
              {item.price} <br/>
              {item.description}
            </p>
            <button value={index} onClick={this.viewItemHandler}>View this shit</button>
          </li>
        )
      }
    })
    return (
      <div>
        <input  className={styles.name}
                placeholder="Search for items.."
                onChange={this.changeHandler}
                onKeyDown={this.enterHandler}
                value={this.state.search}/>
        <button onClick={this.submitHandler}>Submit</button>
        <ul>
          {itemList}
        </ul>
        <Product  product={this.state.product}
                  addItemToCartHandler={this.addItemToCartHandler}
                  removeItemFromCartHandler={this.removeItemFromCartHandler}
                  cart={this.state.cart}/>
      </div>
    );
  }
}

export default Form;
