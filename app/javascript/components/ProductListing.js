import React from 'react'

function ProductListing(props){

    return(
        <div>
           <h1>{props.product.name}</h1>

            <img className="img-fluid" src={props.product.img_url}/>
    <p>{props.product.description}</p>
    <p>{props.product.price}</p>

    <button onClick={props.addToCart} className="btn btn-lg btn-dark">Add To Cart</button>
        </div>
    )
}

export default ProductListing