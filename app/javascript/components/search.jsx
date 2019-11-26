import React from 'react'
import axios from 'axios';
import classnames from 'classnames';

import Product from './product';
import Cart from './cart';

class Search extends React.Component {

  constructor(){
    super();

    this.state = {
      name: "",
      price: 30,
      products: [],
      selectedProduct: [],
      cart: []
    };
  }


    productName(event){
        this.setState({name: event.target.value});
    }

    productPrice(event){
        this.setState({price: event.target.value});
    }

    getProducts(){

      const url = '/products.json';

      axios.get(url)
        .then((response) => {

          const data = response.data
          let show = []
          for (let i=0; i < data.length; i++){
            if (data[i].name.toLowerCase().includes(this.state.name.toLowerCase()) && data[i].price < parseInt(this.state.price)){
                show.push(data[i]);
            }
          }


          this.setState({ products: show })

        }).catch((error)=>{
          console.log(error);
        })
    }


    seeProduct(event){
        let selected = [];
        selected.push(parseInt(event.target.value));
        this.setState({selectedProduct: selected});
    }

    setCart(event){
        console.log("event = "+ event.target.value)
        let cart = this.state.cart;
        cart.push(parseInt(event.target.value));
        this.setState({cart: cart});
    }


  render() {


        console.log(this.state.price)

        const products = this.state.products.map((x, index)=>{
          return (  <div className="mt-3 text-center">
                        <button className="btn btn-outline-primary" value={x.id} onClick={(event)=>{ this.seeProduct(event) }} >
                            {x.name}
                        </button>
                    </div>);
                });

    return (
      <div className="container">
          <div className="row mb-5">
            <div className="col-4">
                <h2 className="text-center">Search</h2>
                <label>Product Name:</label>
                <input className="form-control" onChange={(event)=>{ this.productName(event) }} placeholder="Search Input" />
                <br/>
                <label>Sort by Price($0 - $30):</label>
                <input type="range" className="form-control-range" id="formControlRange" min="0" max="30" step="10" onChange={(event)=>{ this.productPrice(event) }}  />
                <br/>
                <button className="btn btn-primary" onClick={()=>{ this.getProducts() }}>
                  Find Product
                </button>
                {products}
            </div>
            <div className="col-4">
                <Product setCartProduct={(event)=>{ this.setCart(event) }} seeProduct={this.state.selectedProduct} />
            </div>
            <div className="col-4">
                <Cart cart={this.state.cart} />
            </div>
          </div>
      </div>
    );
  }
}

export default Search;