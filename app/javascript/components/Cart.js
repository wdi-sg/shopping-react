import React from 'react'
import SearchResultListing from './SearchResultListing'
function Cart(props){

    props.cart.items.length!==0 ? cartItems = props.cart.items((item, i)=> {
        return <SearchResultListing key={i} product={item} id={item.id} productResultClick={props.productResultClick}/>
    }) : null

    return(
        <div>
           {props.cart.items.length!==0 && cartItems}
        </div>
    )
}

export default Cart