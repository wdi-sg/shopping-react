import React from 'react';
import axios from 'axios';
import Search from '../components/search/search'
import Display from '../components/display/display'

class App extends React.Component{
  constructor(){
  super()
    this.state ={
      clicked:false,
      products:[],
      name:""
    }
  }
  clickHandler(){
    console.log("working click");
    clicked: {this.setState.true}
  }
  getProducts(){

  const url = '/products.json';

  axios.get(url)
    .then((response) => {

      const data = response.data

      this.setState({ products: data })

    }).catch((error)=>{
      console.log(error);
    })
}


  render(){
    const products = this.state.products.map((product)=>{
      return(
        <div>

          <p>{product.name}</p>
          <p>{product.price}</p>

        </div>
      )
    })
    return(
      <div className="container-fluid">
        <h1>test</h1>
        <Display/>
        <div className="row">
          <div className="col-4 ">

            <input placeholder="search" onChange={()=>{this.onNameChange(event)}}/>
            <br/>
            <br/>
              <button onClick={()=>{ this.getProducts() }}>
                   Click to See Products

                 </button>
                  <Search/>
            <button className="" onClick={()=>{this.clickHandler()}}>search</button>
          </div>
          <div className="col-4">
            <div className="card" >
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <Display/>
                <h6 className="card-subtitle mb-2 text-muted">Description</h6>
                <h6 className="card-subtitle mb-2 text-muted">Price $$$</h6>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <button className="btn btn-primary">Add to cart</button>
              </div>
            </div>
          </div>
      <div className="col-4">
          <div className="card card-body">
            {products}
            <p>lorem ipsum</p>
            <p>lorem ipsum</p>
            <p>lorem ipsum</p>
          </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
