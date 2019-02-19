import React from 'react';
import PropTypes from 'prop-types';

class ShowSearchResults extends React.Component {
    render(){
        let results = this.props.searchResults.map( (result, index) => {
            return(
                <div>
                    <button key={index} value={index}>
                        {result.name}
                    </button>
                </div>
            )
        })

        return(
            <div>
                <h2>Search Results</h2>
                {results}
            </div>
        )
    }


}

ShowSearchResults.propTypes = {
    searchResults: PropTypes.array.isRequired,
};


export default ShowSearchResults;