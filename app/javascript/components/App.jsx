import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios';


class App extends React.Component {
    constructor() {
        super();
        this.state = {
            products: []
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

render() {
    let lists = this.state.products.map( (stuff, index)=> {
    return <li key={index}>{stuff.name}</li>
} )
    return (
          <div>
          <button onClick={()=>{ this.getProducts() }}>
          Click to See Products
          </button>

<ul>
{lists}
</ul>

</div>
        )
    }
}


export default App;