import React from 'react';

class SearchForm extends React.Component {
    render() {
        return (
            <form className="form-inline my-2 my-lg-0" onSubmit={this.props.handleSubmit} autoComplete="off">
              <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" id="search" value={this.props.searchProduct} onChange={this.props.handleChange} />
              <button className="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={this.props.makeAjaxCall} >Search</button>
            </form>
        )
    }
}

export default SearchForm;