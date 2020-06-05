import React from 'react';


function Product(props) {
    return (

        <div>
            <h2>Product: {props.name}</h2>
            <img src={props.img} />
            <h3>Description: <p>{props.content}</p></h3>
            <h3>Price: <p>${props.price}</p></h3>
            <button onClick={() => {
                    props.clickHandler(props.id);}}>Add to Cart</button>
            <button onClick={props.onToggle}>Back</button>
        </div>


    )
}

export default Product;