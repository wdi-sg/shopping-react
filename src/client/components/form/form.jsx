import React from 'react';

import styles from './style.scss';

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      monkey: 'haha',
      word: '',
      counter: 0
    };
  }

    componentDidMount(){

        console.log("WOW REQUEST");
        this.setState({counter: this.state.counter+1});

        // rename react component context (this keyword) so that I can reference this.setState in responseHandler
        const banana = this;

        // what to do when we recieve the request
        var responseHandler = function() {
            // console.log("()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()response text", this.responseText);
            // console.log("status text", this.statusText);
            // console.log("status code", this.status);
            const result = JSON.parse( this.responseText);
            banana.setState({products: result});
            //console.log(banana.state.products);
        };

        // make a new request
        var request = new XMLHttpRequest();

        // listen for the request response
        request.addEventListener("load", responseHandler);

        // ready the system by calling open, and specifying the url
        request.open("GET", "http://localhost:3000/products");

        // send the request
        request.send();
    }

    prodDetails(e, index){
        console.log( this.state.products.products[index]);
    }

    changeHandler(event){
        // debugger;
        console.log(event.target.value);
        this.setState({word:event.target.value});
        // console.log(this.state.word);
    }

    doSearch(){
        console.log("in doSearch "+ this.state.word);
        let searchWord = this.state.word;
        // this.setState({word: ""});
        let products = this.state.products.products;
        //console.log(products);
        let getProduct = products.filter(product => product.name.toLowerCase().includes(searchWord.toLowerCase()));
        console.log(getProduct);
        let listItems = null;
        listItems = getProduct.map((item, index) => {
                    return (
                            <li>{item.name}, {item.price} <button onClick={(e)=>{this.prodDetails(e, index)}}>Show Details</button>
                            </li>
                        )
                });
    }

    render() {
        console.log("RENDERING");
        let keys = Object.keys(this.state);
        console.log(keys);
        let listItems = null;
        if(keys.includes("products")){
            //console.log(this.state.products.products);
            let list = this.state.products.products;
            listItems = list.map((item, index) => {
                    return (
                            <li>{item.name}, {item.price} <button onClick={(e)=>{this.prodDetails(e, index)}}>Show Details</button>
                            </li>
                        )
                });
        }


        return (
          <div>
            <p>{this.state.monkey}</p>
            <input className={styles.name} onChange={(event)=>{this.changeHandler(event)}} value={this.state.word} />
            <button onClick={()=>{this.doSearch()}}>Search</button>
            <ul>
                {listItems}
            </ul>
          </div>
        );
    }
}

export default Form;