import React from 'react';

class Search extends React.Component {

	constructor() {
		super();

		this.inputHandler = this.inputHandler.bind(this);

		this.state = {
			search: "",
		};
	}

	inputHandler(event){
		console.log(event.target.value);
	    this.setState({search: event.target.value});
	 }

	render() {
		return (
			<React.Fragment>
				<h1>SEARCH!</h1>
				<input onChange={this.inputHandler} />
			</React.Fragment>
		)
	}
}

export default Search;