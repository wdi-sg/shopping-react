import React from 'react';

class Product extends React.Component{

    render() {
        const products = this.props.products.map((product,i)=>{
            return (<div className="card" key={i}>
                <p>Name: {product.name} Price: ${product.price}</p>
                <p>{product.image_url}</p>
                <p>Description: {product.description}</p>
                <button onClick={()=>{this.props.addToCart(i)}} className="btn btn-primary btn-sm">Add to cart</button>
            </div>);
        });
        return (<div className="col">
            {products}
        </div>)
    }
}

export default Product;