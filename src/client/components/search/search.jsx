import React from 'react';
import styles from './style.scss';
import Result from '../result/result';

class Search extends React.Component {
    constructor() {
        super();

        this.req = new XMLHttpRequest();

        this.state = {
            products: [],
        };
    }

    submitHandler(e) {
        // the reason for this variable is because loadRequestHandler is unable to access react .this within its scope
        const reactState = this;

        const loadRequestHandler = function () {
            const data = JSON.parse( this.responseText );
            reactState.setState( { products: data.products } );
        }

        if (e.target.value.length > 3 ) {
            this.req.addEventListener("load", loadRequestHandler);
            this.req.open("GET", "http://localhost:3000/products?query=" + e.target.value);
            this.req.send();
        }
    }

    render() {
        return (
            <div>
                <form onKeyUp={ (e) => { this.submitHandler(e) } }>
                    <h4>Search:</h4>
                    <input type="text" className="form-control"/>
                </form>

                <br/>

                <Result products={ this.state.products }/>
            </div>
        );
    }
}

export default Search;