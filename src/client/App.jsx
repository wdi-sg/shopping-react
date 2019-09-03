import React from 'react';
import { hot } from 'react-hot-loader';

import styles from './style.scss';
import Search from './components/search/search';
import Product from './components/product/product';
import Price from './components/price/price';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
       products: [],
    };
  }

  componentDidMount() {
    fetch("http://localhost:3000/products")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            products: result.products
          });
        },

        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
    }





  render() {

    const allItems = this.state.products.map((item, index)=>{
            return <li key={index}> {item.name} </li>
        });

    return (
      <div className = {styles.container}>
        <Search />
         <p>{allItems}</p>
        <Product />
        <Price />
      </div>
    );
  }
}

export default hot(module)(App);