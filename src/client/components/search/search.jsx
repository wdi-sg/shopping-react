import React from 'react';
import styles from './style.scss';
import Result from '../result/result';

class Search extends React.Component {
    constructor() {
        super();

        this.state = {
        };
    }

    render() {
        return (
            <div>
                <form onKeyUp={ (e) => { this.props.searchHandler(e) } }>
                    <h4>Search:</h4>
                    <input type="text" className="form-control"/>
                </form>

                <br/>

                <Result products={ this.props.products }/>
            </div>
        );
    }
}

export default Search;