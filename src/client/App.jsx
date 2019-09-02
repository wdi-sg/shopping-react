import React from 'react';
import { hot } from 'react-hot-loader';
import Counter from './components/counter/counter';
import Form from './components/form/form';



class App extends React.Component {
    render() {
        return(
            <div className = "main-container">
                <h1> Shop Bee </h1>
                <Form/>
            </div>
        );
    }
}

export default hot(module)(App);