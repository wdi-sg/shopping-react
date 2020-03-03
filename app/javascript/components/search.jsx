import React, { Component } from 'react'

import Result from './search/result';
import axios from 'axios';

export class Search extends Component {
    constructor() {
        super();
        this.state = {
            products: []
        }
    }

    onSearchChange = searchQuery => {
        searchQuery = searchQuery.toLowerCase();
        const url = "/products.json";
        this.setState({ searchQuery: searchQuery });
    
        axios
          .get(url)
          .then(response => {
            const data = response.data;
    
            const { searchQuery } = this.state;
            let filteredProducts = data.filter(product => {
              return product.name.toLowerCase().includes(searchQuery);
            });
            this.setState({ allProducts: response.data });
            this.setState({ products: filteredProducts });
            // this.setState({ posts: data });
          })
          .catch(error => {
            console.log(error);
          });
      };
      
    componentDidMount(){
        const url = '/products.json';
      
        axios.get(url)
          .then((response) => {
      
            const data = response.data;
            const { searchQuery } = this.state;
            let filteredProducts = data.filter(product => {
            return product.name.toLowerCase().includes(searchQuery);
            });
            // this.setState({ allProducts: response.data });
            // this.setState({ products: filteredProducts });
            console.log(data)
            
            this.setState({ products: data })
      
          }).catch((error)=>{
            console.log(error);
          })
      }
    render() {
        return (
            <div>
                Yallo<br />
                <input type="text" onChange={e => {
                this.onSearchChange(e.target.value);
                }} />
                <Result results={this.state.products} />
            </div>
        )
    }
}

export default Search
