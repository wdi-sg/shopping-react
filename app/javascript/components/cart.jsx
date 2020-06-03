import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import axios from 'axios';

class Cart extends React.Component {
  constructor(){
    super()
  }

  render(){

    const items = this.props.items.map((item,index) => {
      return <div>
        <p>
          {item.name} 
          {item.price}
          <button style={{display:'inline-block'}} onClick={(evt) => this.props.deleteItem(index)}>Delete Me!</button>
        </p>
        </div>
    });

    

    const array = this.props.items.map(item => item.price)
    
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    const price = array.reduce(reducer,0)

    return (<div className="border border-primary">
      {items}

      <p>Sub-total = {price}</p>
      <p>After GST = {price * 1.07}</p>

      </div>)
  }
}

export default Cart