import React from 'react';

const style = {
    margin: "10px"
}

class Product extends React.Component {
    render() {
        const {selectedProduct} = this.props;
        return (
            <div style={style}>
                <h1>PRODUCT</h1>
                <h3>{selectedProduct ? selectedProduct.name : ""}</h3>
                {selectedProduct !== null ?
                    <img src={selectedProduct.image_url} alt="" /> : ""
                }
                <p>{selectedProduct ? `$${selectedProduct.price}` : ""}</p>
                <p>{selectedProduct ? selectedProduct.description : ""}</p>
                {selectedProduct ?
                    <button onClick={(e) => this.props.addToCart(e)}>
                        Add To Cart
                    </button> : ""}
            </div>
        )
    }
}

export default Product;
