import React from 'react';
import PropTypes from 'prop-types';

class ShowSearchResults extends React.Component {
    constructor(){
        super();
        this.onClick = this.onClick.bind(this);
    }

    onClick(event){
        const userSelect = event.target.value;
        this.props.selectSetState(userSelect);

        let pdtObj = this.props.searchResults.find(pdt => pdt.itemId == userSelect);
        this.props.selectedPdtSetState(pdtObj);
    }

    render(){
        let results = this.props.searchResults.map( (result, index) => {
            return(
                <div>
                    <button key={index} value={result.itemId} onClick={this.onClick}>
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
    searchResults: PropTypes.array,
    selectSetState: PropTypes.func,
    selectClick: PropTypes.string,
    selectedPdtSetState: PropTypes.func,
};


export default ShowSearchResults;