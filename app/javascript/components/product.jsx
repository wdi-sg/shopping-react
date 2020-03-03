import React, { Component } from 'react';

export default class Product extends Component {

    postCart = (events) => {
        this.props.getCart(events);
    }

    render() {
        let productDisplay = ""
        if (this.props.product){
            productDisplay = this.props.product.map((product,index)=> {
            return (
                    <div key={product.id} className="card" style={{width: "18rem"}}>
                    <img src={product.imgurl} className="card-img-top" alt="..."/>
                  <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">{product.description}</p>
                    <button onClick={() => {this.postCart(product)}} className="btn btn-primary">Add to cart</button>
                  </div>
                </div>
                )
            })
        }
        return (
            <div>
            {productDisplay}
            </div>
        );
    }
}