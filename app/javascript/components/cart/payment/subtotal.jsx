import React from 'react';

class Subtotal extends React.Component {

  render() {
    let subtotal;
    if(this.props.totalprice) {
      subtotal = parseInt(this.props.totalprice)
    }
    return (
      <div>
        <h2>Subtotal</h2>
        {subtotal}
      </div>
    );
  }
}
export default Subtotal;