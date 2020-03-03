import React from 'react'

import axios from 'axios';

export default class Search extends React.Component{

    getProducts = (events) => {
      const input = events.target.value
      const url = '/shoppings.json';
        axios.get(url)
            .then((response) => {
              const data = response.data
              const result = data.filter(product => product.name.toLowerCase().includes(input));
              this.props.setProducts(result)
            }).catch((error)=>{
              console.log(error);
            })
    }

    getProduct = (events) => {
        console.log(events);
        this.props.getProduct(events);
    }

    render(){
        const productsSearch = this.props.products.map((product, index)=>{
          return (<div key={index}>
            <p>{product.name}</p>
            <p>{product.price}</p>
            <button onClick={()=>{ this.getProduct(product)}}>View</button>
          </div>);
        });
        return(
            <div>
            <h1>Search</h1>
            <input onChange={(events)=>{ this.getProducts(events) }}/>
            {productsSearch}
            </div>
        );
    }
}