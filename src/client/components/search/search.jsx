import React from 'react';

import PropTypes from 'prop-types';

import main_styles from '../../style.scss';

class Search extends React.Component {
  

  render() {
    const list  = this.props.list;
    
    
      return (
        <div>
            <button onClick = {this.props.search}>Search</button>
          <ol>
            {list.map(product => (
              <li key={product.id}>
                <a id = {product.id} onClick ={this.props.display}>{product.name}</a>
              </li>
            ))}
        </ol>
        </div>
      );
  }
  
}

export default Search;