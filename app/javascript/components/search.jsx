import React from 'react'
import axios from 'axios';


class Search extends React.Component{

constructor(){
      super();

      this.state = {
        products:[],
        value:"",
        product:{}
    };
  }

  getProducts(){

  const url = '/products.json';

  axios.get(url)
    .then((response) => {

      const data = response.data
      var reqProducts = data.filter((product) => {
        return (product.name.toLowerCase()).includes(this.state.value.toLowerCase()) ;
    });

      this.setState({ products: reqProducts })

    }).catch((error)=>{
      console.log(error);
    })
  }


handleInput=(event)=>{
    this.setState({
        value: event.target.value
    });
}
/*showProducts(event){
    let product = this.state.products[event.target.value];
         this.setState({ product: product })

}
<div>
                <button onClick={(event)=>{ this.showProducts(event) }} value= {index}>name: {product.name}</button>
              </div>*/



    render(){
      const products = this.state.products.map((product, index)=>{
          return (
            <div>
            {product.name}


            </div>);
          });
        return(
          <div>
            <h1>Search</h1>
            <div>
              <input value={this.state.value} onChange={(event)=>{this.handleInput(event)}}>
              </input>
            </div>
              <div>
                <button onClick={()=>{ this.getProducts() }}>Search</button>
              </div>
              {products}
          </div>

          );
    }
 }
 export default Search;