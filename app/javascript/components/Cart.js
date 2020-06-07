import React from 'react'
import SearchResultListing from './SearchResultListing'
function Cart(props){

    let cartItems = props.cart.items.map((item, i)=> {
        return <SearchResultListing key={i} product={item} id={item.id} productResultClick={props.productResultClick}/>
    }) 

    return(
        <div>
           {cartItems}
        </div>
    )
}

export default Cart