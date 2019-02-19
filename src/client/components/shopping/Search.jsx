import React from 'react';
import SearchResults from './SearchResults';
import ShowResult from './ShowResult';
import Cart from './Cart';

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

	// componentDidMount() {
	//   console.log( 
	//   	`component did mount \n 
	//   	getting derived state from props \n
	//   	rendering \n
	//   	React updates DOM and refs
	//   	`
	//   );
	// }

	// componentDidUpdate( prevProps, prevState, snapshot ) {
	//   console.log( `
	//   	component did update \n 
	//   	getting derived state from props \n
	//   	should component update \n
	//   	render \n
	//   	get snapshot before update \n
	//   	react updates dom and refs
	//   	`);
	//   console.log( "prevProps", prevProps);
	//   console.log( "prevState", prevState);
	//   console.log( "snapshot from get snapshot before update: "+snapshot);
	// }

	// componentWillUnmount() {
	//   console.log( "component will unmount");
	// }

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
		let showCase = [];
		showCase.push(results[event.target.value])
		this.setState({show: showCase});
	}

	addToCartHandler(event) {
		if (event !== undefined) {
			this.setState({cart: [this.state.show,...this.state.cart]});
		}
	}

	findListIndex(results, show) {
		if (results !== undefined && show !== undefined)
			return results.indexOf(show[0]);
	}

	render() {
		const {results, show, cart} = this.state;

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
					showcase={show}
					addToCart={this.addToCartHandler}
				/>
				<Cart
					cart = {cart} 
				/>
			</React.Fragment>
		)
	}
}

export default Search;

	// static getDerivedStateFromProps( nextProps, prevState ){
	//   console.log( "get derived state from props");
	//   console.log( "nextProps", nextProps);
	//   console.log( "prevState", prevState);
	//   return null;
	// }
	// getSnapshotBeforeUpdate( prevProps, prevState ){
	//   console.log("get snapshot before update");
	//   console.log( "prevProps", prevProps);
	//   console.log( "prevState", prevState);
	//   return "***the snapshot***";
	// }
	// shouldComponentUpdate( nextProps, nextState ) {
	//   console.log( "decide if component should update");
	//   console.log( "nextProps", nextProps);
	//   console.log( "nextState", nextState);
	//   return true;
	// }