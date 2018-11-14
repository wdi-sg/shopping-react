import React from 'react';

import PropTypes from 'prop-types';

import styles from './style.scss';

//print out search results, item on click reveals more info
class Results extends React.Component{

    render(){
        return(
            <ul>
            {this.props.item.map((item, i) => (
                <li key={i} onClick={() => this.props.display(item)} >
                {item.name}<br/>
                ${item.msrp}
                </li>
          ))}
            </ul>
        )
    }
}

//drop down menu to sort by
class Sort extends React.Component{
    render(){
        return(
            <select onChange={this.props.sortBy} value={this.props.sorted}>
            <option>Sort By</option>
            <option value='name'>Name</option>
            <option value='price'>Price</option>
            <option value='rating'>Rating</option>
            </select>
        )
    }
}

//search form
class Search extends React.Component {
    constructor() {
        super();
        this.makeQuery = this.makeQuery.bind(this);
        this.changeHandler = this.changeHandler.bind(this);
        this.sort = this.sort.bind(this);

        this.state = {
            banana: 'sneakers',
            queryData: '',
            queryResult: [],
            sorted: ''
        };
    }

    changeHandler(event) {
        this.setState({ queryData: event.target.value });
        console.log("change", event.target.value);
    }

    //sends ajax
    makeQuery() {
        var reactThis = this;
        console.log(this.state.queryData);

        var reqListener = function ()  {
                //debugger;

                let data = JSON.parse(this.responseText);
                reactThis.setState({ queryResult: data.items });

                console.log('data:',data)

        }

        var oReq = new XMLHttpRequest();
        var link = "http://localhost:3000/api/query?search=" + reactThis.state.queryData;

        oReq.addEventListener("load", reqListener);
        oReq.open("GET", link);
        oReq.send();

    }

    //function for onclick to sort results
    sort(event){
        this.setState({ sorted: event.target.value });
        let list = this.state.queryResult;


        if (event.target.value === 'name'){
            let sorted = list.sort(function(a,b) {
                if (a.name < b.name) {
                    return -1;
                  }
                  if (a.name > b.name) {
                    return 1;
                  }

                  // names must be equal
                  return 0;
            } );
            console.log("sorted arr", sorted);

        }

        else if (event.target.value === 'price'){
            let sorted = list.sort(function(a,b) {

                if (a.msrp < b.msrp) {
                    return -1;
                  }
                  if (a.msrp > b.msrp) {
                    return 1;
                  }

                  // price must be equal
                  return 0;
            } );
            console.log("sorted arr", sorted);
        }

        else if (event.target.value === 'rating'){
            let sorted = list.sort(function(a,b) {
                if (a.customerRating < b.customerRating) {
                    return -1;
                  }
                  if (a.customerRating > b.customerRating) {
                    return 1;
                  }

                  // price must be equal
                  return 0;
            } );
            console.log("sorted arr", sorted);

        }
    }

    render() {
        return (
        <div>
            <input onChange={this.changeHandler} value={this.state.queryData} />
            <button onClick={this.makeQuery}>Search</button>
            <Sort sortBy={this.sort} sorted={this.state.sorted}/>
            <Results item={this.state.queryResult} display={this.props.display}/>
        </div>
        );
    }
}

// Search.propTypes = {
//     message: PropTypes.string.isRequired
// };

export default Search;