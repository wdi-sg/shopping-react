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

      this.setState({ products: data })

    }).catch((error)=>{
      console.log(error);
    })
  }

  render(){
    const products = this.state.products.map((product, index)=>{
      return (<div>
        <p>{product.name}</p>
      </div>);
    });
    return(
      <div>
        <div><input className="name-input"></input></div>
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