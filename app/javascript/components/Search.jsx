import React from 'react';
import axios from 'axios';

class Search extends React.Component {

    render() {

        return (
            <div>
                <input onChange={(event) => {this.inputOnChange(event.target.text)}}/>
            </div>
            )
    }
}


export default Search;