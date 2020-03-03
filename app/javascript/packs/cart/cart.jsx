import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'


class Cart extends React.Component {
    constructor(){
        console.log("constructing");
          super()
        this.state = {
              total: 0,
              shipping: 7
          } 
        }
    
    render(){
        console.log(this.props.cartItem)
        let products = this.props.cartItem.map((product)=>{
            return (<div class="card" style={{width: "18rem"}}>
            <div class="card-body">
            <h5 class="card-title">{product.name}</h5>
            <button key={product.id} onClick ={()=>{}}>Remove</button>
          </div>
        </div>
            )
        })

        let arrSum = function(arr){
            return arr.reduce(function(a,b){
                console.log(a)
                console.log(b.price)
                console.log(a.price + b.price)
              return a + b.price
            },0);
          }
         let totalValue = arrSum(this.props.cartItem)
         console.log(parseInt(totalValue))

        return(
        <div>
            {products}
            <p>Sub Total: {totalValue} </p>
            <p>Shipping: {this.state.shipping} </p>
            <p>total: {totalValue + this.state.shipping} </p>
        </div>
        )
    }
}
export default Cart