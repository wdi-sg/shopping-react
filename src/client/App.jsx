import React from 'react';
import { hot } from 'react-hot-loader';

import { Search } from './components/shopping/';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      errorInfo: null
    };
  }

  componentDidCatch(error, errorInfo) {
    // Catch errors in any child components and re-renders with an error message
    this.setState({
      error: error,
      errorInfo: errorInfo
    });
  }

  render() {
    if (this.state.error) {
      // Fallback UI if an error occurs
      return (
        <div>
          <h2>{"Oh-no! Something went wrong"}</h2>
          <p className="red">
            {this.state.error && this.state.error.toString()}
          </p>
          <div>{"Component Stack Error Details: "}</div>
          <p className="red">{this.state.errorInfo.componentStack}</p>
        </div>
      );
    }
    // component normally just renders children
    return this.props.children;
  }
}

class BuggyButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      releaseBugs: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      releaseBugs: true
    });
  }

  render() {
    if (this.state.releaseBugs) {
      throw new Error("I crashed!");
    }
    return (
      <button className="btn" onClick={this.handleClick}>
        {"Scary Button!"}
      </button>
    );
  }
}

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      message: 'hello',
    };
  }

  render() {
    return (
      <div>
        <ErrorBoundary>
          <BuggyButton /> 
          <h1>Welcome.</h1>
          <Search />
        </ErrorBoundary>
      </div>
    );
  }
}

export default hot(module)(App);