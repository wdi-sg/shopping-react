import React from 'react'
import axios from 'axios';

export default class Productcomponent extends React.Component {
  constructor(props){
    super(props);


  }

  render(){
    return(
      <div>
        <img src={this.props.url}></img>
        <p><b>Description: </b>{this.props.description}</p>
        <p>Price: {this.props.price}</p>
      </div>
    );
  }
}