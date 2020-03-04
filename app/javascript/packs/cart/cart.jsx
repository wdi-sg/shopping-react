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
        
        showProduct(key){
          const url = '/products/' + key + '.json';
          console.log(url)
            axios.get(url)
              .then((response) => {
                
                const data = response.data
                console.log(data)
                this.props.productCallback(data)
          
              }).catch((error)=>{
                console.log(error);
              })
        }
    
    render(){
        console.log(this.props.cartItem)
        let products = this.props.cartItem.map((product,index)=>{
          console.log(index, "this is INDEX INDEX INDEX")
            return (<div class="card" style={{width: "18rem"}}>
            <div class="card-body">
            <h5 class="card-title">{product.name}</h5>
            <button key={index} onClick ={()=>{this.props.removeItem({index})}}>Remove</button>
            <button key={product.id} onClick ={()=>{this.showProduct(product.id)}}>Show</button>
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