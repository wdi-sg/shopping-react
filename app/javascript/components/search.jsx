import React, {useState} from 'react'


const Search = props => { 
  const handleClick = (event) => {
    console.log(event.target)
  }
  
  const productElements = props.products.map((product, index)=>{
        return (<li>
            {product.name}
        </li>);
      });
  const lookUp = (event) => {
    let filteredArray = [];
    if (event.target.value === ""){
      filteredArray = props.allProducts
      console.log(filteredArray)
    } else {
      for (let el of props.allProducts){
        if (el.name.toLowerCase().includes(event.target.value.toLowerCase())){
          filteredArray.push(el)
        }
      }
    }
    props.changeProducts(filteredArray)
  }





    return <div >
        Search: <input type="text" onChange={()=>{ lookUp(event)}} />

        <ul style={{listStyle: "none", paddingLeft:"0"}}>{productElements}</ul>
        </div>
}


export default Search