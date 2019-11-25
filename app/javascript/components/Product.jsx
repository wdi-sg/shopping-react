import React, { Component } from 'react'

export class Product extends Component {
    render() {
        
        
        return (
            <div>
                <h1>{this.props.selectedProduct? this.props.selectedProduct.name : ""}</h1>
                {this.props.selectedProduct? <img src={this.props.selectedProduct.image_url} alt=""/> : "" }
                <br/>
                <p>{this.props.selectedProduct? "$"+ this.props.selectedProduct.price : ""}</p>
                <p>{this.props.selectedProduct? this.props.selectedProduct.description : ""}</p>
                {this.props.selectedProduct? <button onClick={(e)=> this.props.addToCart(e)}> Add To Cart</button> : ""}
            </div>
        )
    }
}

export default Product
