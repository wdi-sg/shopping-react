import React from 'react';
import styles from './style.scss';

class SearchForm extends React.Component {

    render() {
        return (
           // autocomplete(document.getElementById("myInput"), this.props.allProducts);
            <form className="form-inline" onSubmit={this.props.handleSubmit} autoComplete="off">
              <input className="form-control" type="search" placeholder="Search" aria-label="Search" id="search" value={this.props.searchWord} onChange={this.props.handleChange} />
              <button className="btn btn-outline-success" type="button" onClick={this.props.searchProducts} id="searchButton" >Search</button>

            </form>
        )
    }
}

export default SearchForm;