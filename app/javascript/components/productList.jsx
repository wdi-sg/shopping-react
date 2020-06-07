import React from 'react';
import axios from 'axios';


class ProductList extends React.Component {

  constructor(){
    super();

    this.state = {
        products:[]
    };
  }

  indexClick(){
    console.log("clicked")
    const url = '/products.json';
    const runWhenDone = (response) => {
      const data = response.data
      this.setState({ products: data })
      console.log(data)
    }

    const whenError = (error) => {
      console.log("error", error)
    }
    axios.get(url).then(runWhenDone).catch(whenError)
  }

  render() {

    const products = this.state.products.map((product, index)=>{
        return (<div className="product" key={index}>
          <div className="product-image">
            <img src={product.image_url} />
          </div>
          <div className="product-info">
            <h4>{product.name}</h4>
            <p>{product.price}</p>
            <p>{product.description}</p>
          </div>
        </div>);
    });

    return (
      <div className="product-list">
        <p>product list:</p>
        <p>
            <button onClick={()=>{
                this.indexClick();
            }}>Index</button>
        </p>
        <div>
            {products}
        </div>
      </div>
    );
  }
}




export default ProductList;