import React from 'react'
import axios from 'axios';


class Product extends React.Component {
    constructor(){
    super()
    console.log("rendering product");
    this.state = {
      name : "",
      price: "",
      description: "",
      image_url: ""
    }
  }

    render(){
        return(
            <div>
                <h1>Product:</h1>
                <h3>Name:</h3>
                    <p>{this.state.name}</p>
                <h3>Price:</h3>
                    <p>{this.state.price}</p>
                <h3>Description:</h3>
                    <p>{this.state.description}</p>
                <h3>Image:</h3>
                    <img src = {this.state.image_url}/>
            </div>
        );
    }
}

export default Product;
