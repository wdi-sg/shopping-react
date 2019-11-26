import React from 'react'
import axios from 'axios'
import styles from './style.scss'
import classnames from 'classnames'
import Display from './display.jsx'

const cx = classnames.bind(styles)

class App extends React.Component {
    constructor(){
        super()
        this.state={
            cart: [],
            products: [],
            displayed: {}
        }
    }

    getproducts(){
      const url = '/products.json';
      var eventVal = event.target.value.toLowerCase();
      console.log(event.target.value)
      axios.get(url)
        .then((response) => {

          const data = response.data
          var array = []
          // console.log("Target val: ",eventVal)
          for (var i = 0; i < data.length; i++){
            var name = data[i].name.toLowerCase()

            if(eventVal === ''){
                array = [];
            } else if(name.includes(eventVal)){
                // console.log('includes!')
                array = [...array, {...data[i]}]
            }
          }

          this.setState({ products: array, displayed: {} })

        }).catch((error)=>{
          console.log(error);
        })
    }

    addToCart(product){
        // console.log(product)
        var cart = this.state.cart;
        cart = [...cart, {...product}]
        this.setState({cart: cart, displayed:{}})
    }

    removeFromCart(index){
        var cart = this.state.cart;
        cart.splice(index,1);
        this.setState({cart: cart})
    }

    displayItem(product){
        // console.log(product)
        var input = document.getElementById('input')
        input.value = ""
        this.setState({displayed: product, products: []})
    }


    render(){
        // const myDiv = cx (
        //     styles.myDiv,
        // )

        const products = this.state.products.map((product, index)=>{
          return (
          <div key={index} className="myDiv">
            <p>{product.name}</p>
            <p>{product.price}</p>
            <button onClick={()=>{this.displayItem(product)}}>Display Item</button>
            <button onClick={()=>{this.addToCart(product)}}>Add to cart</button>
          </div>
          );
        });

        var price = 0;
        for(var i = 0; i < this.state.cart.length; i++){
            price = price + this.state.cart[i].price
        }

        const carts = this.state.cart.map((cart,index)=>{
            return(
                <div key={index} className="myDiv">
                    <p>{cart.name}</p>
                    <button onClick={()=>{this.removeFromCart(index)}}>Remove item from cart</button>
                </div>
            )
        })

        return(
            <div>
                <div>Total price: {price}</div>
                {carts}
                <input id="input" onChange={()=>{this.getproducts()}}/>
                {products}
                <Display addFunc={(product)=>{this.addToCart(product)}} displayKey={this.state.displayed}/>
            </div>
        )
    }
}

export default App;