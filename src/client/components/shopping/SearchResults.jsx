import React from 'react';

class SearchResults extends React.Component {
	render () {

		let Results = this.props.results.map ( (result, index) => {
			return(
				<React.Fragment>
	                <button 
	                	key = {index}
	                	value = {index}
	                	onClick = {this.props.showItem}
	                >
	                	{result.name}
	                </button>
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