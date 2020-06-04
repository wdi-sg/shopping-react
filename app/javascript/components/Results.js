import React from 'react'
import SearchResultListing from './SearchResultListing'

function SearchForm(props){

    let results;
    if (props.products){
        results = props.products.map((product,i) => {
            return (
                <SearchResultListing key={i} id={product.id} productResultClick={props.productResultClick} product={product}/>
            )
        })
    }

    return(
        <div className="p-2">
            {results}
        </div>
    )
}

export default SearchForm