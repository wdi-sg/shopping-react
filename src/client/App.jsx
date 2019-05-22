import React from 'react';
import { hot } from 'react-hot-loader';

import Form from './components/form/form';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            data: "",
        };

        this.searchHandler = this.searchHandler.bind(this);
    }

    searchHandler(query){

        console.log("search query", query)

        fetch(`http://localhost:3000/filter/${query}`)
        .then(res=>{
            console.log(res)
            res.json().then(res=>{
                // console.log(res);
                this.setState({data: res});
                console.log(this.state.data);
            })
        })
    }

    render() {
    return (
      <div>
        <Form searchHandler={this.searchHandler}/>
      </div>
    );
    }
}

export default hot(module)(App);