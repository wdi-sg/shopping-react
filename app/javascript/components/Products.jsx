import React from 'react'
import axios from 'axios';

class Products extends React.Component {
    render() {
        const {individualProduct} = this.props
        return (
            <div>
            <h1>{individualProduct ? individualProduct.name: ""}</h1>
            </div>
            )
    }
}

export default Products;