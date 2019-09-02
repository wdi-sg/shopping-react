import React from 'react';
import styles from './style.scss';

class SearchForm extends React.Component {
  constructor() {
    super();
    this.state = {
      productsFound:[],
    };
  }

  render() {
    return (
      <div>
         <p>{this.state.productsFound}</p>
      </div>
    );
  }
}

export default SearchForm;