import React from 'react';

class Shipping extends React.Component {

  render() {
    let shipping;
    if(this.props.totalprice) {
      shipping = (<div>3 sgd</div>)
    }
    return (
      <div>
        <h2>Shipping</h2>
        {shipping}
      </div>
    );
  }
}
export default Shipping;