import React from 'react'
import { hot } from 'react-hot-loader';


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

export default hot(module)(Product);
