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

     makeAjaxCall(){
        //copy the value of this in order to refer to it in another way.
        console.log( "set state function");
        console.log( this.setState );

        // get a hold of component for react
        var reactThis = this;

        var reqListener = function(){
          console.log(this.responseText);

          const data = JSON.parse( this.responseText );

          reactThis.setState({items:data.products})

          // this keyword doesnt refer to component
          //this.setState({items:this.responseText})

        }

        var oReq = new XMLHttpRequest();
        oReq.addEventListener("load", reqListener);
        oReq.open("GET", "/products");
        oReq.send();
      }



    render() {
        return (
            <SearchForm handleChange={this.handleChange} handleSubmit={this.handleSubmit} searchProduct={this.state.searchProduct} makeAjaxCall={this.makeAjaxCall} />
        )
    }
}

export default Search;