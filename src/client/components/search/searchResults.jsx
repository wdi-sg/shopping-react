import React from 'react';
import PropTypes from 'prop-types';

//import DisplayProduct from './displayProduct';

class SearchResults extends React.Component {

    render() {
        let searchResults = this.props.searchResults;

        // do a map to print the list
        let allProducts = searchResults.map((obj, index) => {
            return <li key={index} onClick={this.props.handleClickFromApp}>
                    {obj.name}
                </li>
        }) // end of map

        return (
            <React.Fragment>
                <div className="searchList-container">
                    <ul id="searchList">
                        {allProducts}
                    </ul>
                </div>


            </React.Fragment>
        )
    }
}

SearchResults.propTypes = {
    searchResults: PropTypes.array
}

export default SearchResults;