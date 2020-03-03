import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios';
import Products from '../components/Products';
// import Carts from '../components/Carts';

var popups = require("popups");

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            products: [],
            individualProduct: null,
            cart: null
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
    this.setState({ individualProduct: this.state.products[index] })
}

render() {
    let lists = this.state.products.map((stuff, index)=> {
        return (
        <button className="btn btn-outline-info" value={index} onClick={e => {
            this.showIndividualProduct(e.target.value)
        }}>{stuff.name}</button>
        )
})

    return (
          <div>
          <button className="btn btn-danger" onClick={()=>{ this.getProducts() }}>
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




// addProductToCart(){
//     if (selectedProduct = this.state.products[index]) {
//         this.state.products.push(this.state.cart);
//         this.setState(this.state.products);
//         console.log("clicking")
//     } else {
//         popups.alert({
//             content:
//                 "Please select an item"
//             });
//     }
// }




export default App;