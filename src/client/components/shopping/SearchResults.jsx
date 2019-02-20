import React from 'react';

class SearchResults extends React.Component {
	render () {

		let Results = this.props.results.map ( (result, index) => {
			return(
	                <button 
	                	key = {result.itemId.toString()}
	                	value = {index}
	                	onClick = {this.props.showItem}
	                >
	                	{result.name}
	                </button>
			)
		})

		// console.log("render results",this.props.results);

		return(
			<div>
				{
				this.props.results.length > 0 &&
				<React.Fragment>
					<h1> Search Results </h1>
					{ Results }
				</React.Fragment>
				}
		    </div>
		)
	}
}

export default SearchResults;