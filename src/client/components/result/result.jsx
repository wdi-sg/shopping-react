import React from 'react';
import styles from './styles.scss'

class Result extends React.Component {
  render() {
    const elements = this.props.products.map( (item, index) => {
        return (
            <div
                className= { styles.result }
                key= { index }
                id= { item.id }
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
        <button
            className= "btn btn-primary"
            onClick= { () => { this.props.sortProductByPriceAscHandler() } }
        >
            Sort Result by Price (Lowest to Highest)
        </button>
        <br/>
        <br/>
        <button
            className= "btn btn-info"
            onClick= { () => { this.props.sortProductByPriceDescHandler() } }
        >
            Sort Result by Price (Highest to Lowest)
        </button>
      </div>
    );
  }
}

export default Result;