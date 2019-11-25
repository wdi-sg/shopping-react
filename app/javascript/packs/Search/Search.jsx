import React from 'react';
import styles from './style';
import axios from 'axios';

class Search extends React.Component {

    constructor() {
        super();
        this.state = {
            products: []
        }
    }

    getAllPosts(){

        const url = '/products.json';
      
        axios.get(url)
          .then((response) => {
      
            const data = response.data
            console.log("data", data);
      
            this.setState({ products: data })
      
          }).catch((error)=>{
            console.log(error);
          })
      }
      
      inputChangeHandler(event) {
          console.log("event.target.value", event.target.value);

      }

    render() {

        let products = this.state.products;

        products = products.map(product => (
            <div key={product.id}>
                <h3>{product.name}</h3>
                <hr/>
            </div>
        ))

        return (
            <div className={styles.search}>
                <h1>Search</h1>
                <button onClick={()=>{ this.getAllPosts() }}>
                    View All Products
                </button>
                <label htmlFor="search"></label>
                <input id="search" type="text" onChange={(event)=>{this.inputChangeHandler(event)}}/>
                <h2>results:</h2>
                {products}
            </div>
        );
    }

}

export default Search;