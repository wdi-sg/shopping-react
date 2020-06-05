import React, { useState } from 'react';


const SearchList = (props) => {


    return (

            <div>
                <h3>{props.product.name}</h3>
                <p>{props.product.description}</p>
                <button onClick={() => {
                    props.onChecked(props.product.id);}}>View Product</button>
                <button onClick={() => {
                    props.clickHandler(props.product.id);}}>Add to Cart</button>
                    <hr />
            </div>

    )
}

export default SearchList;