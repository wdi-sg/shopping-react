import React from 'react';
import PropTypes from 'prop-types';
import style from './style.scss';


class Search extends React.Component {
	constructor() {
		super();
		this.state = {
			searchInput : "",
			searchResultObjectKeys: [],
			searchResultArray: [],
			optionSelected: "name"
		}
	}

	componentDidMount () {
		fetch(`/products`)
		.then((resp) => resp.json())
		.then((data) => {
			// console.log("data.products",data.products);
			const searchResultArray = data.products;
			const searchResultObjectKeys = Object.keys(searchResultArray[0]);
			// console.log("searchResultObjectKeys", searchResultObjectKeys);

			this.setState({
				searchResultObjectKeys: searchResultObjectKeys,
				searchResultArray: searchResultArray
			})
		})
		.catch(function(error) {
			console.log("Fetch Error", error)
		})
	}

	handleSearchChange (e) {
		console.log("handleSearchChange");
		const entry = e.target.value;
		console.log("Search input",entry);
		this.setState({
			searchInput: entry
		})

		// const reactThis = this;
		let order = this.state.optionSelected;

		if (entry) {
			console.log("searching for product..");
			
			// fetch(`/products/search/${entry}/order/${order}`)
			fetch(`/products/query?search=${entry}&order=${order}`)
			.then((resp) => resp.json())
			.then((data) => {
				// console.log("data.products",data.products);
				const searchResultArray = data.products;
				const searchResultObjectKeys = Object.keys(searchResultArray[0]);
				// console.log("searchResultObjectKeys", searchResultObjectKeys);

				this.setState({
					searchResultObjectKeys: searchResultObjectKeys,
					searchResultArray: searchResultArray
				})
			})
			.catch(function(error) {
				console.log("Fetch Error", error)
			})
		} else {
			console.log("fetching all products");
			fetch(`/products`)
			.then((resp) => resp.json())
			.then((data) => {
				// console.log("data.products",data.products);
				const searchResultArray = data.products;
				const searchResultObjectKeys = Object.keys(searchResultArray[0]);
				// console.log("searchResultObjectKeys", searchResultObjectKeys);

				this.setState({
					searchResultObjectKeys: searchResultObjectKeys,
					searchResultArray: searchResultArray
				})
			})
			.catch(function(error) {
				console.log("Fetch Error", error)
			})
		}
	}

	handleSelectChange (e) {
		const optionSelected = e.target.value;
		console.log("optionSelected",optionSelected);
		this.setState({
			optionSelected: optionSelected
		})

		// const reactThis = this;

		// fetch(`/products/search/${this.state.searchInput}/order/${optionSelected}`)
		fetch(`/products/query?search=${this.state.searchInput}&order=${optionSelected}`)
		.then((resp) => resp.json())
		.then((data) => {
			// console.log("data.products",data.products);
			const searchResultArray = data.products;
			const searchResultObjectKeys = Object.keys(searchResultArray[0]);
			// console.log("searchResultObjectKeys", searchResultObjectKeys);

			this.setState({
				searchResultObjectKeys: searchResultObjectKeys,
				searchResultArray: searchResultArray
			})
		})
		.catch(function(error) {
			console.log("Fetch Error", error)
		})
	}

	handleClick (item) {
		console.log("Clicked! Displaying product");
		const newProductToDisplay = item;
		newProductToDisplay.imageUrl = "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fcdn-img.instyle.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2F684xflex%2Fpublic%2F1467911445%2F070716-secret-life-of-pets-lead.jpg%3Fitok%3DAgpqIvcY&q=85";
		this.props.onClickOnSearchResult(newProductToDisplay);
	}

	viewCart = (viewCart) => {
		viewCart();
	}

	render () {
		// console.log("this.state.searchResultObjectKeys",this.state.searchResultObjectKeys);
		const tableHeaders = this.state.searchResultObjectKeys.map(item => {
			if (item !== "id")
			return (
				<th key={"header"+item} scope="col">{item.toUpperCase()}</th>
			);
		})

		const tableBody = this.state.searchResultArray.map(item => {
			return (
				<tr id={item.id} key={"product"+item.id} onClick={()=>this.handleClick(item)}>
					<td scope="row">{item.name}</td>
					<td>{item.price}</td>
					<td>{item.description}</td>
				</tr>
			);
		})

		return (
			<div className="col-sm">
				<div className="d-flex justify-content-between">
					<div>
						<input className="form-control" type="text" onChange={(e)=>{this.handleSearchChange(e)}} value={this.state.searchInput} placeholder="Search" />
					</div>
					<div className="d-flex justify-content-between">
						<div className="d-flex flex-wrap align-items-center justify-content-between">
							<span>Sort By:&nbsp;</span>
							<select style={{height:"90%", fontSize:"14px"}} onChange={(e)=>this.handleSelectChange(e)}>
								<option value="name" defaultValue>Name</option>
								<option value="price">Price</option>
							</select>
							<button className="btn btn-info ml-3" style={{height:"90%"}} id={style["show-hide-cart"]} onClick={()=>this.viewCart(this.props.viewCart)}>View/Hide Cart</button>
						</div>
						
					</div>
				</div>
				<div className="table-responsive my-3">
					<table className="table table table-bordered table-hover">
						<thead className="bg-info">
							<tr className="text-white">
								{tableHeaders}
							</tr>
						</thead>
						<tbody>
							{tableBody}
						</tbody>
					</table>
				</div>
			</div>
		);
	}
}

Search.propTypes = {
  onClickOnSearchResult: PropTypes.func.isRequired,
  viewCart: PropTypes.func.isRequired,
};

export default Search;