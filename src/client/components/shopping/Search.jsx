import React from 'react';
import SearchResults from './SearchResults';

class Search extends React.Component {

	constructor() {
		super();

		this.inputHandler = this.inputHandler.bind(this);
		this.makeSearch = this.makeSearch.bind(this);

		this.state = {
			search: "",
			results: [],
		};
	}

	inputHandler(event){
	    this.setState({search: event.target.value});
	 }

	 makeSearch() {

	 	const here = this;
	 	const {search} = this.state;

	 	const jsonParseResult = function() {
	 		let result = JSON.parse(this.responseText).items;
	 		here.setState({results: result});
	 	}

	 	const newXReq = new XMLHttpRequest();

	 	const reqURL = "http://localhost:3000/api/query?search=" + search;

	 	console.log("Request URL", reqURL);

	 	newXReq.addEventListener("load", jsonParseResult);
	 	newXReq.open("GET", reqURL);
	 	newXReq.send();

	 }

	render() {

		const {results} = this.state;

		return (
			<React.Fragment>
				<h1>SEARCH!</h1>
				<input onChange={this.inputHandler} />
				<button onClick={this.makeSearch}>Search</button>
				<SearchResults results = {results}/>
			</React.Fragment>
		)
	}
}

export default Search;