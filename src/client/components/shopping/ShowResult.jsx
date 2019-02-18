import React from 'react';

class ShowResult extends React.Component {
	render () {

		const {showcase} = this.props;
		console.log(showcase);

		return(
			<div>
		          <React.Fragment>
			          <h1> Showing Result </h1>
			          <p>{showcase.name}</p>
		          </React.Fragment>
	        </div>
		)
	}
}

export default ShowResult;