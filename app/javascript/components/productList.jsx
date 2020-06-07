import React from 'react';
import axios from 'axios';
import Product from './product.jsx';
import Cart from './cart.jsx';

class ProductList extends React.Component {

  constructor(){
    super();

    this.state = {
        products:[]
    };
  }
  async componentDidMount() {
    const url = '/products.json';
    const runWhenDone = (response) => {
       const data = response.data
       this.setState({ products: data })
       console.log(data)
    }
    const whenError = (error) => {
      console.log("error", error)
    }
    await axios.get(url).then(runWhenDone).catch(whenError);
  }

  searchChanged = (event) => {
    this.setState({ search: event.target.value.toLowerCase() })
  }

  clickedHandler=(event) =>{
    console.log("name clicked!!!!")
    console.log(event.target.innerText)
    this.setState({ click: event.target.innerText })
  }

  render() {

    const products = this.state.products
      .filter(product => product.name.toLowerCase().includes(this.state.search))
      .map((product, index)=>{
        return (
          <div className="product" key={product.id}>
            <div className="product-info">
              <a href="#" onClick={this.clickedHandler}><h4>{product.name}</h4></a>
              <p>$ {product.price}</p>
            </div>
          </div>
        );
    });

    const product = this.state.products
      .filter(product => product.name.includes(this.state.click))
      .map((product, index)=>{
        return (
          <div className="product" key={product.id}>
            <div className="product-image">
              <img src={product.image_url} />
            </div>
            <div className="product-info">
              <a href="#" onClick={this.clickedHandler}><h4>{product.name}</h4></a>
              <p>$ {product.price}</p>
              <p>{product.description}</p>
            </div>
          </div>
        );
    });

    return (
      <div className="app-content">
        <div className="container">
          <h3>SEARCH</h3>
          <input type='text' className="search-bar" placeholder='Search' onChange={this.searchChanged} value={this.state.search || ""}/>
          <h4>Search Results</h4>
          <div>
              {products}
          </div>
        </div>
        <Product product={product}/>
        <Cart />
      </div>
    );
  }
}

export default ProductList;