import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios';
import Products from '../components/Products';


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
    let lists = this.state.products.map( (stuff, index)=> {
        return (
        <button value={index} onClick={e => {
            this.showIndividualProduct(e.target.value)
        }}>{stuff.name}</button>
        )
})

    return (
          <div>
          <button onClick={()=>{ this.getProducts() }}>
          Click to See Products
          </button>
        <ul>
                {lists}
        </ul>
        <Products individualProduct = {this.state.individualProduct} />

</div>
        )
    }
}




export default App;