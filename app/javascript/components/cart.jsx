import React, {useState} from 'react'


const Cart = props => { 
  let subtotal, total, gst;
  if (props.cartproducts.length > 0){
    let prices = props.cartproducts.map(product => parseFloat(product.price))
    subtotal = prices.reduce((acc, curr) => acc + curr).toFixed(2);
    gst = (subtotal * 0.07).toFixed(2)
    total = (parseFloat(subtotal) + parseFloat(gst) + 7).toFixed(2)
  }
  
  
  const productElements = props.cartproducts.map((product, index)=>{
        return (<li>

            
                <div style={{display: "flex", justifyContent: "space-between"}}>
                    <a className="card-text">{product.name}</a>
                    <a className="card-text">${product.price}</a>
                </div>
            
            <br />
            

        </li>);
      });

    return <div className="card" style={{padding: "10px", width: "20%"}}>
        <ul style={{listStyle: "none", paddingLeft:"0"}}>{productElements}
        <hr></hr>
        <li>
            <div style={{display: "flex", justifyContent: "space-between"}}>
                <a className="card-text">Subtotal</a>
                <a className="card-text">${subtotal}</a>
            </div>
            <br />
        </li>
        <li>
            <div style={{display: "flex", justifyContent: "space-between"}}>
                <a className="card-text">Shipping</a>
                <a className="card-text">$7.00</a>
            </div>
            <br />
        </li>
        <li>
            <div style={{display: "flex", justifyContent: "space-between"}}>
                <a className="card-text">GST</a>
                <a className="card-text">${gst}</a>
            </div>
            <br />
        </li>
        <li>
            <div style={{display: "flex", justifyContent: "space-between"}}>
                <a className="card-text">Total</a>
                <a className="card-text">${total}</a>
            </div>
            <br />
        </li>
        </ul>
        </div>
}


export default Cart