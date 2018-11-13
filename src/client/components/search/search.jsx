import React from 'react';

import PropTypes from 'prop-types';

import styles from './style.scss';

class Results extends React.Component{
    render(){
        return(
            <ul>
            {this.props.item.map((item, i) => (
                <li key={i}>
                {item.name}
                </li>
          ))}
            </ul>
        )
    }

}

class Search extends React.Component {
    constructor() {
        super();
        this.makeQuery = this.makeQuery.bind(this);
        this.changeHandler = this.changeHandler.bind(this);

        this.state = {
            banana: 'sneakers',
            queryData: '',
            queryResult: []
        };
    }

    changeHandler(event) {
        this.setState({ queryData: event.target.value });
        console.log("change", event.target.value);
    }

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

    render() {
        return (
        <div>
            <input onChange={this.changeHandler} value={this.state.queryData} />
            <button onClick={this.makeQuery}>Search</button>
            <Results item={this.state.queryResult}/>
        </div>
        );
    }
}

// Search.propTypes = {
//     message: PropTypes.string.isRequired
// };

export default Search;