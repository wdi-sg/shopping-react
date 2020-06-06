import React from 'react'
import axios from 'axios';

export default class Searchcomponent extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      products: []
    }
  }

  getProducts(){

  const url = '/products.json';

  axios.get(url)
    .then((response) => {
      const data = response.data
      let search = document.getElementById("name-input").value;
      let filteredData = data.filter(filtered => {
        return filtered.name.toLowerCase().includes(search.toLowerCase());
      });
      this.setState({ products: filteredData })
    }).catch((error)=>{
      console.log(error);
    })
  }

  render(){

    const products = this.state.products.map((filteredProduct, index)=>{
      let dbIndex = index + 1;
      let link = "/onepage/" + String(dbIndex);
      return (<div>
        <p>{filteredProduct.name}</p>
        <a href={link}>Show</a>
      </div>);
    });
    return(
      <div>
        <div><input id="name-input"></input></div>
        <div>
          <button onClick={()=>{ this.getProducts() }}>
            Get Products
          </button>
          {products}
        </div>
      </div>
    );
  }
}