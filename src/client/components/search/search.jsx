import React from 'react';

class Search extends React.Component {
    constructor() {
        super();
        this.state = {
        };
    }


    render() {
        return (
            <div>
                <input placeholder="Search your shit here" />
                <button type="button" className="btn btn-primary" onClick={this.props.ajaxCall}>
                Search</button>
            </div>
        );
    }
}

export default Search;