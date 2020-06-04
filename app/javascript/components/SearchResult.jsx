import React from 'react';

export default class SearchResult extends React.Component {
    render() {
        return (
            <tr>
                <td>{this.props.result.name}</td>
                <td>$ {this.props.result.price}</td>
                <td>{this.props.result.description}</td>
            </tr>
        );
    }
}