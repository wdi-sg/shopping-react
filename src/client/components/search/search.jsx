import React from 'react';

import SearchForm from './searchForm';

class Search extends React.Component {
    constructor() {
        super();
        this.state = {
            searchProduct: "",
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({searchProduct: e.target.value})
        //console.log(e.target.value)
    }

    handleSubmit(e) {
        console.log(this.state.searchProduct);
        // makeAjaxCall();
        // console.log(this.state.items)
        e.preventDefault();
    }

    makeAjaxCall() {

        // //copy the value of this in order to refer to it in another way.
        // var reactThis = this;

        // var reqListener = () => {
        //     console.log(this.responseText);

        //     //transform the response to real js objects
        //     const data = JSON.parse( this.responseText );

        //     // here, we can't do this.setState

        //     //refer to react state instead
        //     //reactThis.setState({queryData:data.products});
        // }

        // var oReq = new XMLHttpRequest();
        // oReq.addEventListener("load", reqListener);
        // oReq.open("GET", "/products");
        // oReq.send();

        var req = new XMLHttpRequest();
        req.open("GET", "/products", false);
        req.send(null);

        const data = JSON.parse(req.responseText);

        this.setState({items: data.products})

        console.log(this.state.items)
    }



    render() {
        return (
            <SearchForm handleChange={this.handleChange} handleSubmit={this.handleSubmit} searchProduct={this.state.searchProduct} makeAjaxCall={this.makeAjaxCall} />
        )
    }
}

export default Search;