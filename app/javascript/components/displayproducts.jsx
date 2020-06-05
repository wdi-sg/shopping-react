import React, {useState} from 'react'


const DisplayProducts = props => { 
  
  const handleClick = (product) => {
      props.addToCart(product)
  }

  const productElements = props.products.map((product, index)=>{
        return (<li>

            <div className="card">
                <img src={product.image_url} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">{product.description}</p>
                    <p className="card-text">${product.price}</p>
                    <a href="#" className="btn btn-primary" onClick={()=>{handleClick(product)}}>Add To Cart</a>
                </div>
            </div>
            <br />
            

        </li>);
      });

    return <div style={{width: "30%"}}>
        <ul style={{listStyle: "none", paddingLeft:"0"}}>{productElements}</ul>
        </div>
}


export default DisplayProducts