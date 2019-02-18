import React from 'react';

class ShowResult extends React.Component {
	render () {

		const {showcase} = this.props;
		console.log(showcase[0]);

		return(
			<div>
				{ 
		          showcase[0] !== undefined && 
		          <React.Fragment>
			         	<h1> Showing Result </h1>
			    		<p> Name: { showcase[0]["name"] }</p>
			    		<p> Price: { showcase[0]["salePrice"] }</p>
			    		<img src={ showcase[0]["thumbnailImage"] } />
			    		<p> Description: { showcase[0]["shortDescription"] }</p>
			    		<p> Customer Rating: { showcase[0]["customerRating"] }</p>
			    		<p> Available: { showcase[0]["availableOnline"] }</p>
		          </React.Fragment>
		        }
	        </div>
		)
	}
}

export default ShowResult;

