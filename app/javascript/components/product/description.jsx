import React from 'react';

class Description extends React.Component {


  render() {

    return (
      <div>
      <h2> Description</h2>
        {this.props.description}
      </div>
      );
  }
}
export default Description;