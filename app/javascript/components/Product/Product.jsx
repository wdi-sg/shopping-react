import React from 'react';

class Product extends React.Component{

    render() {
        // const product = this.props.product.map((product,i)=>{
        //     return (<div className="card" key={i}>
        //         <p>Name: {product.name} Price: ${product.price}</p>
        //         <p>{product.image_url}</p>
        //         <p>Description: {product.description}</p>
        //         <button onClick={()=>{this.props.addToCart(i)}} className="btn btn-primary btn-sm">Add to cart</button>
        //     </div>);
        // });
        let {name,price,image_url,description} = this.props.product;
        if (name !== undefined) {
            return (<div className="col">
                <h3>{name}</h3>
                <img src={image_url} className="img-fluid"/>
                <p>{description}</p>
                <h4>${price}</h4>
                <button
                    onClick={()=>{this.props.addToCart(this.props.product)}}
                    className="btn btn-block btn-primary"
                >
                    Add to cart
                </button>
            </div>)
        } else {
            return (<div>
            </div>)
        }
    }
}

export default Product;