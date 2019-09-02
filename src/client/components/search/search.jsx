import React from 'react';

import PropTypes from 'prop-types';

import main_styles from '../../style.scss';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      products: [],
      list: []
    };
    this.search = this.search.bind(this)
  }

  componentDidMount() {
    fetch('/products')
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            products: result.products
          });
        },
        
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  } 
  search (){
    var list = this.state.products;
    this.setState({list: list});
  }


  render() {
    const { error, isLoaded, products, list} = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          <button onClick = {this.search}>Search</button>
          <ol>
            {list.map(product => (
              <li key={product.id}>
                <a href = {product.id}>{product.name}</a>
              </li>
            ))}
        </ol>
        </div>
      );
    }
  }
}

export default Search;