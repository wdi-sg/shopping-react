import React from 'react';
import { hot } from 'react-hot-loader';

import Counter from './components/counter/counter';
import Form from './components/form/form';
// import Search from './components/search/search';

import styles from './style.scss';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      message: 'hello',
      word: '',
      counter: 0,
      products: null,
      searchRes: null
    };
    this.changeHandler=this.changeHandler.bind(this);
    this.doSearch=this.doSearch.bind(this);
    this.prodDetails=this.prodDetails.bind(this);
  }

  componentDidMount(){

        console.log("WOW REQUEST");
        this.setState({counter: this.state.counter+1});

        // rename react component context (this keyword) so that I can reference this.setState in responseHandler
        const banana = this;

        // what to do when we recieve the request
        var responseHandler = function() {
            console.log("()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()response text", this.responseText);
            console.log("status text", this.statusText);
            console.log("status code", this.status);
            const result = JSON.parse( this.responseText);
            banana.setState({products: result});
            console.log("ajax req products: "+banana.state.products);
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

    doSearch(event){
        console.log("in doSearch "+ this.state.word);
        let searchWord = this.state.word;
        // this.setState({word: ""});
        let products = this.state.products.products;
        //console.log(products);
        let getProduct = products.filter(product => product.name.toLowerCase().includes(searchWord.toLowerCase()));
        console.log(getProduct);
        if(getProduct){
            this.setState({searchRes: getProduct});
            console.log(this.state.searchRes);
        } else {
            console.log("No products found");
        }

    }

  render() {
    console.log("RENDERING");
        let keys = Object.keys(this.state);
        console.log(keys);
        let listItems = null;
        //if(this.state.products.products){
            console.log(this.state);
            console.log(this.state.products.products);
            let list = this.state.products.products;
            listItems = list.map((item) => {
                let itemId = item.id;
                    return (
                            <li>{item.name}, {item.price} <button onClick={(e)=>{this.prodDetails(e, itemId)}}>Show Details</button>
                            </li>
                        )
                });

        /*} else {
            let list = this.state.searchRes;
            console.log("this.state.searchRes " +this.state.searchRes);
            listItems = list.map((item) => {
                let itemId = item.id;
                        return (
                                <li>{item.name}, {item.price} <button onClick={(e)=>{this.prodDetails(e, itemId)}}>Show Details</button>
                                </li>
                            )
                    });
        }*/


    return (
        <div className={styles.mainWrap}>
            <div className={styles.colShow}>
                <Form word = {this.state.word} changeHandler = {this.changeHandler} doSearch={this.doSearch} />
                Welcome.
                <Counter message={this.state.message} />
{/*                <Search searchRes={this.state.searchRes} prodDetails = {this.prodDetails} />*/}
                <ul>
                    {listItems}
                </ul>
            </div>
            <div className={styles.colShow}>
                Product Details
            </div>
            <div className={styles.colShow}>
                shopping cart
            </div>
        </div>
    );
  }
}

export default hot(module)(App);