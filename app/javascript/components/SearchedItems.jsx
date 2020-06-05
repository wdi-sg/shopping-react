import React, { useState } from 'react';


function SearchedItems(props) {



    return (

            <div>
                <h3>{props.product.name}</h3>
                <p>{props.product.description}</p>
                <button onClick={() => {
                    props.onChecked(props.product.id);}}>View Product</button>
                    <hr />
            </div>

    )
}

export default SearchedItems;