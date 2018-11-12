import React, {Component} from 'react';
import {hot} from 'react-hot-loader';

import Counter from './components/counter/counter';
import Form from './components/form/form';

class App extends Component {
    constructor(props) {
        super(props);
        this.listen = this.listen.bind(this)
        this.search = this.search.bind(this)
        this.state = {
            items: [],
            isLoaded: false,
            input: "iphone"
        }

    }


    search(event) {
        alert('Searching for: ' + this.state.input);
        this.forceUpdate()

    }

    listen(event) {
        this.setState( { input : event.target.value});
        this.forceUpdate()
        console.log(this.state.input)
        console.log(event.target.value)
    }


    componentDidMount() {

        fetch(`http://api.walmartlabs.com/v1/search?query=${this.state.input}&format=json&facet=on&apiKey=jqn2tbveebvbserj4p7hha4e`)
        .then(res => res.json())
        .then(json => {
            console.log(json.items)
            this.setState({
                isLoaded: true,
                items: json.items,
                input: ""
            })
        })
    }




    render() {

    var { isLoaded, items, input } = this.state;

    if (!isLoaded) {
        return <div>Loading...</div>
    } else {
        return (
        <div className="App">
            Data has been loaded...
            <ul>
            {this.state.items.map(shittyShit => (
                <li key={shittyShit.itemId}>
                {shittyShit.name}
                </li>
            ))};
            </ul>
            <form onSubmit={this.search}>
            <input type="text" value={this.state.input} onChange={this.listen} />
            <input type="submit" value="submit" />
            </form>
        </div>


        )
    }

        return (
            <div className="App">
            </div>
        );
    }

}

ReactDOM.render(
    <div>
    <App />
    </div>,
    document.getElementById("app")
    )
export default hot(module)(App);
