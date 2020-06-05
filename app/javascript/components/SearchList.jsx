import React, { useState } from 'react';


function SearchList(props) {

    const [product, setProduct] = useState(null)



    function viewHandler() {
        console.log('HEYYYY')
    }
    return (
        <li>
        <div>
            <h3>{props.product.name}</h3>
            <p>{props.product.description}</p>
            <button onClick={() => {
                props.onChecked(props.product.id);}}>View Product</button>
        </div>
        </li>

    )
}

export default SearchList;