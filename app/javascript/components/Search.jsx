import React from 'react';


function Search(props) {
    return (
        <li>
        <div>
            <h3>{props.product.name}</h3>
            <p>{props.product.description}</p>
        </div>
        </li>

    )
}

export default Search;