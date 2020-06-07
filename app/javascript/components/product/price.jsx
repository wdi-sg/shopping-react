import React from 'react';

class Price extends React.Component {

  render() {

    return (
      <div>
        <h2> Price</h2>
        {this.props.price}
      </div>
    );
  }
}
export default Price;