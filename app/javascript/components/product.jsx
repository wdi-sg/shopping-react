import React from 'react'
import axios from 'axios';

export default class Search extends React.Component{
    constructor(){
        super()
    }
    addCart(){
        this.props.addCart();
    }
    render(){
        return(
                <div className="col">
                    <h1>Product</h1>
                    <img src={this.props.product.image_url}/>
                    <p>{this.props.product.description}</p>
                    <p>${this.props.product.price}</p>
                    <button className="btn btn-primary" onClick={()=>{ this.addCart() }} >Add to cart</button>
                </div>
            );
    }
}