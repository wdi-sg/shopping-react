import React from 'react';

class SearchResults extends React.Component {
	render () {

		let Results = this.props.results.map ( (result, index) => {
			return(
				<React.Fragment>
	                <p>{result.name}</p>
	            </React.Fragment>
			)
		})

		// console.log("render results",this.props.results);

		return(
			<React.Fragment>
				<h1> Search Results </h1>
				{ Results }
			</React.Fragment>
		)
	}
}

export default SearchResults;