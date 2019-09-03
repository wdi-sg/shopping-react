import React from 'react';

import styles from './style.scss';

class Search extends React.Component {

    constructor() {
        super();
        this.state = {
            query: "",
            result: []
        };
    }

    componentDidMount() {

        //rename react component context (this keyword) so that I can reference this.setState in responseHandler
        const react = this;

        let responseHandler = function() {

            const result = JSON.parse( this.responseText);

            let productsArray = result.products;

            react.setState({ result : productsArray });
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

    changeHandler(event){

        let newInput = this.state.query;
        newInput = event.target.value;
        this.setState({query:newInput});

        //rename react component context (this keyword) so that I can reference this.setState in responseHandler
        const react = this;

        let responseHandler = function() {

            const result = JSON.parse( this.responseText);

            let productsArray = result.products;

            let item = productsArray.filter(obj => {
                return obj.name.includes(react.state.query)
            })

            react.setState({ result : item });
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

    buttonClick() {

        let arrayId = event.target.value;
        let resultArray = this.state.result;

        let singleItemIndex = resultArray.findIndex(x => x.fid == arrayId );

        let newItem = resultArray[singleItemIndex];

        this.props.receivingInput(newItem);

    }


    render() {
        let items = this.state.result.map((item,i) => {
            return(
                <div className="card" key={i}>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-8">
                                <p className="card-text"> {item.name} </p>
                            </div>
                            <div className="col-4 text-right">
                                <button onClick={(event)=>{this.buttonClick(event)}} value={item.fid}>Details</button>
                            </div>
                        </div>
                    </div>
                </div>
            )
        });

        return(
            <div>
                <h2>Search Products</h2>
                <p>
                <input onChange={(event)=>{this.changeHandler(event)}} className="w-100" value={this.state.query} placeholder="Type in product here"/>
                </p>
                {items}
            </div>
        );
    }

}

export default Search;