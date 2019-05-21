import React from 'react';

class Result extends React.Component {
  render() {
    const elements = this.props.products.map( (item, index) => {
        return (
            <div
                key={ item.id }
                id={ item.id }
                onClick= { (e) => { this.props.selectProductHandler(e) } }
            >
                { item.name }
            </div>
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