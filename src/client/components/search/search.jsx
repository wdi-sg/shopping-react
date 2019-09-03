import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.scss';

class Search extends React.Component{
    
    searchHandler(event){
        this.setState({searchInput:event.target.value});
        this.props.searchHandler(event.target.value);
    };

    sortHandler(event){
        this.setState({sortInput:event.target.value});
        this.props.sortHandler(event.target.value);
    };

    render(){
        let results = this.props.sortedResults.map((product, index) => {
            return(
                <ul>
                    <li key={index+product.id}>
                        <p>{product.name} price: {product.price}</p>
                    </li>
                </ul>
            );
        })

        return (
            <div>
                <h3>Search Component</h3>
                <input onChange={(event)=>{this.searchHandler(event)}} value={this.props.searchInput}/>
                <p>Sort by</p>
                <select onChange={(event)=>{this.sortHandler(event)}}>
                    <option value="name" defaultValue>Name</option>
                    <option value="price">Price</option>
                </select>
                {results}
            </div>
        );
    }
}

export default Search;