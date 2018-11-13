import React from 'react';

import styles from './style.scss';

class Form extends React.Component {
    constructor() {
        super();
        this.state = {
            search: '',
            queryData:''
        };

        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.searchWalmart = this.searchWalmart.bind(this);

    }

    onChangeHandler(event) {
        console.log(event.target.value)
        this.setState({ search: event.target.value })
    }

    searchWalmart(e) {
        e.preventDefault()
        console.log("searching Walmart")

        var reactThis = this;

        function reqListener() {
            console.log(this.responseText);
            console.log("search", reactThis.state.search);

            //transform the response to real js objects
            const data = JSON.parse(this.responseText);
            console.log("data", data)
            // here, we can't do this.setState

            //refer to react state instead
            reactThis.setState({ queryData: data });
        }

        var oReq = new XMLHttpRequest();
        oReq.addEventListener("load", reqListener);

        oReq.open("GET", "/api/query?search=" + this.state.search);
        oReq.send();


    }

    testfunction(e){
        e.preventDefault()
        console.log("working function")
    }


    render() {
        return (
            <div>
        <h1>Search Form</h1>

        <form onSubmit = {this.searchWalmart}>
        <input onChange={this.onChangeHandler} className={styles.name} placeholder={this.state.search} value={this.state.search} />

        <button type="submit">Submit</button>
        </form>

      </div>
        );
    }
}

export default Form;