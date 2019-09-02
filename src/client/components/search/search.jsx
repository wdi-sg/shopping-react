import React from 'react';

import styles from './style.scss';

class Search extends React.Component {

    constructor() {
        super();
        this.state = {
            query: "",
            result: ""
        };
    }

    changeHandler(event){

        let newInput = this.state.query;
        newInput = event.target.value;
        this.setState({query:newInput});

    }

    // submitHandler(event) {

    //     // line below is when the user presses the "Enter" key
    //     if (event.keyCode === 13) {
    //         // this.props.receivingInput(this.state.query);

    //         console.log(this.state.query)
    //         this.setState({query: ""});
    //     }
    // }

    doRequest() {

        console.log('starting request')

        // rename react component context (this keyword) so that I can reference this.setState in responseHandler
        const banana = this;

        let responseHandler = function() {
            // console.log("()()()()()response text", this.responseText);
            // console.log("status text", this.statusText);
            // console.log("status code", this.status);

            const result = JSON.parse( this.responseText);

            let productsArray = result.products;

            let item = productsArray.filter(obj => {
                return obj.name.includes(banana.state.query)
            })

            banana.setState({ result : item });

            console.log(banana.state.result)
        };

        // make a new request
        let request = new XMLHttpRequest();

        // listen for the request response
        request.addEventListener("load", responseHandler);

        // ready the system by calling open, and specifying the url
        request.open("GET", "http://localhost:3000/products");

        // send the request
        request.send();
    }

    render() {
        // let items = this.state.result.map((item,i) => {
        //     return( <li key={i}>Name: {item.name} ,Price: {item.price}</li>
        //     )
        // });

        return(
            <div>
                <h2>Search Products</h2>
                <p>
                <input onChange={(event)=>{this.changeHandler(event)}} className="w-100" value={this.state.query}/>
                <button onClick={ () => {this.doRequest()} }>Search</button>
                </p>
                <ul>

                </ul>

            </div>
        );
    }


}

export default Search;