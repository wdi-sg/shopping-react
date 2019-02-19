import React from 'react';
import SearchResults from './SearchResults';
import ShowResult from './ShowResult';

class Search extends React.Component {

	constructor() {
		super();

		this.inputHandler = this.inputHandler.bind(this);
		this.makeSearch = this.makeSearch.bind(this);
		this.showItem = this.showItem.bind(this);
		this.addToCartHandler = this.addToCartHandler.bind(this);
		this.findListIndex = this.findListIndex.bind(this);

		this.state = {
			search: "",
			results: [],
			show: [],
			cart: [],
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

	showItem(event) {
		const {results} = this.state;
		// console.log(this.state.results[event.target.value]);
		let showCase = [];
		showCase.push(results[event.target.value])
		// console.log(showCase);
		this.setState({show: showCase});
	}

	addToCartHandler(event) {
		if (event !== undefined)
			console.log("addtocarthandler", event.target.value);
	}

	findListIndex(results, show) {
		// console.log("index", results.indexOf(show[0]))
		if (results !== undefined && show !== undefined)
			return results.indexOf(show[0]);
	}

	render() {

		const {results, show} = this.state;

		return (
			<React.Fragment>
				<h1>SEARCH!</h1>
				<input onChange={this.inputHandler} />
				<button onClick={this.makeSearch}>Search</button>
				<SearchResults 
					results = {results}
					showItem = {this.showItem}
				/>
				<ShowResult 
					index = {this.findListIndex(results, show)}
					showcase = {show}
					onClick={this.addToCartHandler}
				/>
			</React.Fragment>
		)
	}
}

export default Search;