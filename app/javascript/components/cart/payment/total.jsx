import React from 'react';

class Total extends React.Component {

  render() {
    let display;
    let totalprice = (parseFloat(this.props.totalprice)).toFixed(2)
    console.log(typeof totalprice)
    if(this.props.totalprice) {
       display = (<div>{totalprice}</div>)
    }

    return (
      <div>
        <h2>Total</h2>
        {display}
      </div>
    );
  }
}
export default Total;