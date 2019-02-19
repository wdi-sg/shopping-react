import React from 'react';
import PropTypes from 'prop-types';

class SearchInput extends React.Component {

    constructor(){
        super();
        this.onChange = this.onChange.bind(this);
    }

    onChange(event){
        let userInput = event.target.value;
        this.props.searchInputSetState(userInput);
    }

    render(){
        return(
            <div>
                <input onChange={this.onChange} value={this.props.searchInput} placeholder='Search for item' />
            </div>
        )
    }


}

SearchInput.propTypes = {
    searchInput: PropTypes.string,
    searchInputSetState: PropTypes.func,
};


export default SearchInput;