import React from 'react';
import styles from './style.scss';
import PropTypes from 'prop-types';

class SearchInput extends React.Component {
	constructor() {
		super();
		this.state = {
			input: ""
		};
	}

	inputChanged = (e) => {
		this.setState({input:e.target.value});
		this.props.getResults(this.state.input);
	}

	render() {
		return (
			<div>
				<h2>Search</h2>
				<input className={styles.input} value={this.state.input} onChange={this.inputChanged}/>
			</div>
		);
	}
}

SearchInput.propTypes = {
	getResults: PropTypes.func.isRequired
};

export default SearchInput;
