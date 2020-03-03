import React from 'react'
import axios from 'axios';

class Products extends React.Component {
    render() {
        const {individualProduct} = this.props

        return (
            <div>
                <h2 style={{color: "blue"}}>{this.props.individualProduct? this.props.individualProduct.name : ""}</h2>
                <h4>{this.props.individualProduct? "$"+ this.props.individualProduct.price : ""}</h4>
                <h5 style={{color: "grey"}}>{this.props.individualProduct? this.props.individualProduct.description : ""}</h5>
                {this.props.individualProduct? <button className="btn btn-warning" onClick={(e)=> this.props.addToCart(e)}> Add To Cart</button> : ""}
            </div>
        )
    }
}

export default Products;