import React, { Component } from 'react';

class HelloWorldApp extends Component {
    render() {
        return (
            <div style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <p>Hello, world!</p>
                <p> Hello from inside React JS </p>
            </div>
        );
    }
}

export default HelloWorldApp;