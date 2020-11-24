import React from 'react';
import axios from 'axios';

class Cart extends React.Component{
  constructor(){
    super;


    }
    render(){
         let total = 0;
         let display = this.props.product.map((item)=>{
             total += parseFloat(item.price);
             return <div>{item.name}</div>;
         });

         return(
             <div>
                 <div>
                     <h1>Cart</h1>
                     {display}
                     <div>
                     Total: {total.toFixed(2)}
                     </div>
                 </div>
             </div>
             );
     }
 }
}
export default Cart;