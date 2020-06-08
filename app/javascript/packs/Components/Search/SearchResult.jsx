import React from 'react';
import PropTypes from 'prop-types';

function SearchResult(props) {
  function handleClick(e) {
    props.onProductClick(e)
  }

  return (
    <div className="result" onClickCapture={handleClick} id={props.result.id}>
      <p>Name:{props.result.name}</p>
      <img className="img-fluid" src={props.result.image_url} alt="" />
      <p>
        Description:
        <br />
        {props.result.description}
      </p>
    </div>
  );
}

SearchResult.propTypes = {
  name: PropTypes.string,
  image_url: PropTypes.string,
  description: PropTypes.string
};

// Search.defaultProps = {
//   name: 'David'
// }

export default SearchResult;
