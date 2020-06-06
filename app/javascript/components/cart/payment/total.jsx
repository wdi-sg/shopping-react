import React from 'react';

class Total extends React.Component {

  render() {
    let display;
    let totalprice = (this.props.totalprice*1.07).toFixed(2)
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