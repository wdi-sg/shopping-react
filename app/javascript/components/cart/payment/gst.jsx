import React from 'react';

class Gst extends React.Component {

  render() {

    let gst;
    let gstprice = (this.props.totalprice*0.07).toFixed(2)
    if(this.props.totalprice) {
      gst = (<div> {gstprice}</div>)
    }

    return (
      <div>
        <h2>Gst</h2>
        {gst}
      </div>
    );
  }
}
export default Gst;