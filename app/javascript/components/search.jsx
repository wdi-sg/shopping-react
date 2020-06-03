import React, {useState} from 'react'


const Search = props => { 
  const productElements = props.products.map((product, index)=>{
        return (<li>
          {product.name}
        </li>);
      });
    return <div>
        <ol>{productElements}</ol>
        </div>
}


export default Search