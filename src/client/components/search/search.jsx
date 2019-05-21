import React from 'react';

import styles from './style.scss';

class Search extends React.Component {
    constructor() {
        super();
        this.state = {
        };
    }

    render() {

        return (
            <div>
                <input className={styles.searchbox} placeholder="Search Input"/>
                <button type="button" className="btn btn-primary" onClick={()=>{this.props.makeAjaxCall()}}>
                Search</button>
            </div>
        );
    }

}

export default Search;