import React from 'react';

class Result extends React.Component {
  render() {
    const elements = this.props.products.map( (item, index) => {
        return (
            <div
                key={ index }
                id={ item.id }
                onClick= { (e) => { this.props.selectProductHandler(e) } }
            >
                { item.name }, { item.price }
            </div>
        );
    });

    return (
      <div>
        <h4>Results:</h4>
        { elements }
        <br/>
        <button onClick= { () => { this.props.sortProductByPriceAscHandler() } }>
            Sort Result by Price (Lowest to Highest)
        </button>
        <br/>
        <br/>
        <button onClick= { () => { this.props.sortProductByPriceDescHandler() } }>
            Sort Result by Price (Highest to Lowest)
        </button>
      </div>
    );
  }
}

export default Result;