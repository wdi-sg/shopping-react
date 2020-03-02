import React from 'react'

import axios from 'axios';

import FilterResults from 'react-filter-search';

export default class Search extends React.Component{

    constructor(){
        super();
        this.state = {
            products:[],
            value: ""
        }
    }

    componentWillMount() {
    fetch('/shoppings.json')
      .then(response => response.json())
      .then(json => this.setState({ products: json }));
    }

    handleChange(event) {
    const { value } = event.target;
    this.setState({ value });
  };

    // getProducts(events){
    //   let search = events.target.value
    //   const url = '/shoppings.json';
    //     axios.get(url)
    //         .then((response) => {
    //           const data = response.data
    //           const result = data.filter(product => product.name.length < 12);
    //           console.log(data)
    //           this.setState({products: result})
    //         }).catch((error)=>{
    //           console.log(error);
    //         })

    // }

    render(){
        // const productsSearch = this.state.products.map((product, index)=>{
        //   return (<div key={index}>
        //     <p>{product.name}</p>
        //     <p>{product.price}</p>
        //   </div>);
        // });
        const { value, products } = this.state;
        return(
            <div>
            <h1>Search</h1>
            <input onChange={(events)=>{ this.handleChange(events) }}/>

            <FilterResults value={value} data={products} renderResults={results => (
            <div>
              {results.map(el => (
                <div>
                  <span>{el.name}</span>
                </div>
              ))}
            </div>
          )}
        />
            </div>
        );
    }
}