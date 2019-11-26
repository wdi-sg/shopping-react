import React from 'react';
import Fab from '@material-ui/core/Fab';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

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
                <p className="text-left p-2">{description}</p>
                <div className="d-flex justify-content-between align-items-center">
                    <h4>${price}</h4>
                    <Fab
                        color="primary"
                        onClick={()=>{this.props.addToCart(this.props.product)}}
                    >
                        <ShoppingCartIcon/>
                    </Fab>
                </div>
            </div>)
        } else {
            return (<div>
            </div>)
        }
    }
}

export default Product;