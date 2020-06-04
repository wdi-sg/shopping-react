import React from 'react'

function ProductListing(props){

    return(
        <div>
           <h1>{props.product.name}</h1>

            <img className="img-fluid" src={props.product.img_url}/>
    <p>{props.product.description}</p>
    <p>{props.product.price}</p>

        </div>
    )
}

export default ProductListing