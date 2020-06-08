import React from 'react'

function SearchResultListing(props){

    return(
        <div onClick={props.productResultClick} id={props.id} className="listing media container">
            <div id={props.id} onClick={props.productResultClick} className="row">
            <img id={props.id} onClick={props.productResultClick} src={props.product.img_url} className="mr-3 col-2 img-fluid" alt="..."/>
        <div id={props.id}  onClick={props.productResultClick} className="media-body col-10">
            <h5 id={props.id} onClick={props.productResultClick} className="mt-0">{props.product.name}</h5>
            SGD {props.product.price}
        </div>
            </div>
        </div>
    )
}

export default SearchResultListing