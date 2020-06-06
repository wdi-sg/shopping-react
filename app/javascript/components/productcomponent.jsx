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
      </div>
    );
  }
}