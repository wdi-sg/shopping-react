import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios';
import Products from '../components/Products';
import Cart from '../components/Cart';

var popups = require("popups");

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            products: [],
            individualProduct: null,
            cartItems: []
        }
    }

getProducts(){
  const url = '/products.json';
  axios.get(url)
    .then((response) => {
      const data = response.data
      this.setState({ products: data })
      console.log(this.state.products)
  }).catch((error)=>{
      console.log(error);
    })
}

showIndividualProduct(index) {
    this.setState({individualProduct: this.state.products[index]})
}


addToCart(e){
       this.state.cartItems.push(this.state.individualProduct)
       this.setState({cartItems: this.state.cartItems})
      }



render() {
    let lists = this.state.products.map((stuff, index)=> {
        return (
        <button className="btn btn-outline-secondary" value={index} onClick={e => {
            this.showIndividualProduct(e.target.value)
        }}>{stuff.name}</button>
        )
})

    return (
          <div>
          <button className="btn btn-warning" onClick={()=>{ this.getProducts() }}>
          Click to view products
          </button>
        <ul style={{backgroundColor: "lightyellow"}}>
        {lists}
        </ul>
        <Products individualProduct = {this.state.individualProduct} />
</div>
        )
    }


}

export default App;