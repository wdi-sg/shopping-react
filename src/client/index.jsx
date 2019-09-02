import 'babel-polyfill';
import 'airbnb-browser-shims';
import 'sanitize.css/sanitize.css';
import React from 'react';
import ReactDOM from 'react-dom';
// global styles
import './style.scss';


class App extends React.Component {
    render() {
        return(
            <div className = "main-container">
                <h1> Shop Bee </h1>

            </div>
        );
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('app')
);