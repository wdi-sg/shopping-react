import React from 'react';

import styles from './style.scss';

class Search extends React.Component {
    displayProduct(event) {
        this.props.displayProduct(event);
    }

    sortData() {
        this.props.sortData();
    }

    searchDatabase() {
        this.props.searchDatabase();
    }

    render() {
        let results = "";
        if (this.props.data) {
            results = this.props.data.map((product)=>{
                return (
                    <div onClick={(event)=>{this.displayProduct(event)}} className={styles.search_products} key={product.id} data-id={product.id}>{product.name}
                    </div>
                );
            })
        }
        let searchTerm = (this.props.sortPrice ) ? "$🔼" : "$🔽";

        return (
            <div className = {styles.search_container} >
            <h3>Search</h3>
            <button onClick = { () => this.searchDatabase()} >Search Database</button>
            <button onClick = { () => this.sortData()} >{searchTerm}</button>
            {results}
            </div>
        );
    }
}

export default Search;
