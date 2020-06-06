import React from 'react';

class AddToCartButton extends React.Component {

  constructor(){
    super()
    this.state = {
      qty:'',
    }
    this.handleChange = this.handleChange.bind(this);
  }
  clickHandler(){
    let value = {
      id: this.props.id,
      qty: this.state.qty,
    }
    //this.props.liftclickid(this.props.id)
    this.props.liftclickid(value)
  }
  handleChange(){
    this.setState({qty:event.target.value})
  }
  render() {
    //onced product is clicked, button will appear
    let button = '';
    let qty = '';
    let selector = '';


    if(this.props.id) {
      button = (<button onClick={()=>{this.clickHandler()}}>Add to cart</button>)
      qty = Array.apply(null, { length: 10 }).map((e, i) => (
              <option value={i+1}>
                {i+1}
              </option>
            ));
      selector = (
        <select value={this.state.value} onChange={this.handleChange}>
          {qty}
        </select>
      )
    }

    return (
      <div>
        <h2> AddToCartButton</h2>
        {button}
        {selector}
      </div>
    );
  }
}
export default AddToCartButton;