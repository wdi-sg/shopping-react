import React from 'react'

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

        );
    }
}

export default Product;
