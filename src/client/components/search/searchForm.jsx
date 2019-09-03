import React from 'react';
// import PropTypes from 'prop-types';

class SearchForm extends React.Component {
    render() {
        return (
            <form onSubmit={this.props.handleSubmit} >
              <input type="search" id="search" onChange={this.props.handleInput} defaultValue={this.props.searchProduct} />
              <button type="submit" onClick={this.props.makeAjaxCall} >Search</button>
            </form>
        )
    }
}

// SearchForm.propTypes = {
//     handleSubmit: PropTypes.func
// }
export default SearchForm;