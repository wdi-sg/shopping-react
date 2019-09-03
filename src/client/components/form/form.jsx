import React from 'react';

import styles from './style.scss';

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      monkey: null,
      products: null,
    };
  }

  checkInput=(event)=>{
    console.log(event.target.value);
    let input = event.target.value;
    console.log('checkkkkk');
    this.setState({monkey: input});

  }

  componentDidMount=()=>{

    console.log("WOW REQUEST");
    // this.setState({counter: this.state.counter+1});

    // rename react component context (this keyword) so that I can reference this.setState in responseHandler
    const banana = this;
    console.log(this)
    // what to do when we recieve the request
    var responseHandler = function() {
        console.log("()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()response text", this.responseText);
        console.log("status text", this.statusText);
        console.log("status code", this.status);
        const result = JSON.parse( this.responseText);
        // console.log( result[7].name );
        banana.setState({products: result});
    };

    // make a new request
    var request = new XMLHttpRequest();

    // listen for the request response
    request.addEventListener("load", responseHandler);

    // ready the system by calling open, and specifying the url
    // request.open("GET", "https://swapi.co/api/people/1");
    request.open("GET", "http://localhost:3000/products");

    // send the request
    request.send();
  }

  getProduct=(index)=> {
    console.log('clicked get product')
    console.log('product index', index)
    let currentProduct = this.state.products.products[index]
    console.log(currentProduct);
  }

  render() {
    console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@')
    let x;
    if (this.state.products) {
      // console.log(this.state.products.products)
      x = this.state.products.products.map( (p, i)=> {
          return (
            <li key={i}>
              {p.name} <button onClick={()=> {this.getProduct(i)}}>Check</button>
            </li>
          )
      })
      if (this.state.monkey && this.state.monkey !== "") {
        x = null;
        console.log(this.state.products.products)
        x = this.state.products.products.map( (p, i)=> {
          if (p.name.includes(this.state.monkey)){
            console.log(p.name);
            return (
              <li key={i}>
                {p.name} <button onClick={()=> {this.getProduct(i)}}>Check</button>
              </li>
            )
          }
        })
      }
    } 
    
    console.log(this.state);
    // let list = this.state.products.map()
    return (
      <div>
        <p>{this.state.monkey}</p>
        <input className={styles.name} onChange={this.checkInput} />
        {x}
      </div>
    );
  }
}

export default Form;
