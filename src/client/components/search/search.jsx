import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.scss';

import SearchInput from './search-input';
import SearchResult from './search-result';

class Search extends React.Component {
	render() {
		return (
			<div className={styles.searchContainer}>
				<SearchInput getResults={this.props.getResults}/>
				<SearchResult products={this.props.products} selectProduct={this.props.selectProduct}/>
			</div>
		);
	}
}
Search.propTypes ={
	getResults: PropTypes.func,
	selectProduct: PropTypes.func
};
export default Search;
