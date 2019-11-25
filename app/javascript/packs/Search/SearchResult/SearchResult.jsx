import React from 'react';

class SearchResult extends React.Component {

    render() {

        return (
            <div>
                <h2>
                    <a href="#" onClick={this.props.clicked}>
                        {this.props.product.name}
                    </a>
                </h2>
            </div>
        );
    }
}

export default SearchResult;