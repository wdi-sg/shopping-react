import React from 'react';

class Result extends React.Component {

  render() {
    let elements = this.props.products.map( (item) => {
        return (
            <li>{ item.name }</li>
        );
    });

    return (
      <div>
        <h4>Results:</h4>
        { elements }
      </div>
    );
  }
}

export default Result;