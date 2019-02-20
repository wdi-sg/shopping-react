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

    this.handleLogin = this.handleLogin.bind(this);

    this.state = {
      message: 'hello',
      isLoggedIn: false,
    };
  }

  handleLogin() {
    console.log("Changing Login Status");
    this.setState({
      isLoggedIn: !this.state.isLoggedIn,
    })
  }

  render() {

    const {isLoggedIn} = this.state;

    return (
      <div>
        <ErrorBoundary>
          <BuggyButton />
          {
            isLoggedIn &&
            <button onClick={this.handleLogin}>Logout</button> ||
            <button onClick={this.handleLogin}>Login</button>
          }
          <h1>Welcome.</h1>
          <p>You are currently { isLoggedIn ? "logged in" : "not logged in" }.</p>
          {
            isLoggedIn &&
            <React.Fragment>
              <Search />
            </React.Fragment>
          }
        </ErrorBoundary>
      </div>
    );
  }
}

export default hot(module)(App);