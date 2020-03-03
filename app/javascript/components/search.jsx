import React from 'react'
import axios from 'axios';
import Product from './product'
import Cart from './cart';

export default class Search extends React.Component{
    constructor(){
        super(),
        this.state = {
            products: [],
            value: "",
            product: {},
            cart: []
        }
    }
    componentDidMount(){
        this.getProducts();
    }

    getProducts(){
          const url = '/products.json';
          axios.get(url)
            .then((response) => {
              const data = response.data;

              let products = data.sort((a, b) => (parseInt(a.price) > parseInt(b.price)) ? 1 : -1);
            products = products.filter((product) => {
                return (product.name.toLowerCase()).includes(this.state.value.toLowerCase()) ;
            });
              this.setState({ products: products });
            }).catch((error)=>{
              console.log(error);
            })
    }

    changeInput = (event) =>{
        this.setState({ value: event.target.value });
    }

    showProduct = (event) =>{
        let product = this.state.products[event.target.value];
        this.setState({ product: product });
    }
    addCart = ()=>{
        let product = this.state.product;
        const cart = [product, ...this.state.cart];
        this.setState({ cart: cart });
    }
    removeProduct = (index) =>{
        let cart = this.state.cart;
        cart.splice(index,1);
        this.setState({ cart: cart });
    }
    render(){
        const products = this.state.products.map((product, index)=>{
          return (
                <div className="container">
                    <div className="row">
                        <div className="col p-0">
                            <button className="btn-link border-0" onClick={(e)=>{ this.showProduct(e)}} value={index}>Name: {product.name} || Price: {product.price}</button>
                         </div>
                    </div>
                </div>);
        });
        let displayProduct = "";
        if(Object.keys(this.state.product).length !== 0){
          displayProduct = <Product product={this.state.product} addCart={this.addCart}/>;
        }
        return(
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h1>Search</h1>
                            <div className="form-inline">
                                <input className="form-control" value={this.state.value} onChange={(e)=>{this.changeInput(e)}}></input>
                            </div>
                            <div>
                                <button className="btn btn-primary mt-2 mb-2" onClick={()=>{ this.getProducts() }}>Sort by: price</button>
                                {products}
                            </div>
                    </div>
                        {displayProduct}
                        <Cart product={this.state.cart} removeProduct={this.removeProduct}/>
             </div>
            </div>
            );
    }
}