import React from 'react';
import axios from 'axios';

class App extends React.Component {
	constructor(){
    super();

    this.state = {
      products: []
    };
  }

  getProducts(){

  const url = '/products.json';

  axios.get(url)
    .then((response) => {

      const data = response.data

      console.log(data)

      this.setState({ products: data })

      // console.log(this.state.posts)

    }).catch((error)=>{
      console.log(error);
    })
}

	render() {
		const products = this.state.products.map((p, index)=>{
    return (
      <div>
        <p>{p.name}</p>
        <p>{p.price}</p>
        <img src= {p.url}/>
        <p>{p.description}</p>
      </div>);
    });
    return (
      <div>
      Shopping React!
      <button onClick={()=>{ this.getProducts() }}>
        Click to See all Products
      </button>

      <div className="products"> 
        {products}
      </div>

      </div>
    );
   
  }
}
  


export default(App);