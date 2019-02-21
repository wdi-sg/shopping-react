import React from 'react';
import { hot } from 'react-hot-loader';
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom'
import { Search } from './components/shopping/';
import Calculator from './components/calculate/Calculator';
import Chart from './components/Chart';

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

const NewRoute = () => {
  return(
    <div> 
      <p> New Route </p>
    </div>
  )
}

const Home = () => {
  return(
    <div> 
      <p> Home </p>
    </div>
  )
}

const Unknown = () => {
  return(
    <div> 
      <p> Unknown Page </p>
    </div>
  )
}

const Navigation = () => {
  return(
    <div> 
      <p> Navigation Page </p>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/calculator">Calculator</NavLink>
      <NavLink to="/new">New</NavLink>
      <NavLink to="/chart">Chart</NavLink>
    </div>
  )
}

class App extends React.Component {
  constructor() {
    super();

    this.handleLogin = this.handleLogin.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      message: 'hello',
      isLoggedIn: false,
      name: '',
      email: '',
      number: '',
      isSearching: '',
      chartData:{}
    };
  }

  componentWillMount() {
    this.getChartData();
  }

  getChartData() {
    //ajaxcalls here
    this.setState({
      chartData:{
        labels:['BostonLol', 'Worcester', 'Springfield', 'Lowell', 'Cambridge', 'New Bedford'],
        datasets:[{
          label: 'Population',
          data:[
            617594,
            181405,
            153060,
            106519,
            105162,
            95072
          ],
          backgroundColor:'green',
          borderWith: 4,
          borderColor: '#777',
          hoverBorderWidth: 3,
          hoverBorderColor: 'black',
        }],
      }
    })
  }

  handleLogin() {
    console.log("Changing Login Status");
    this.setState({
      isLoggedIn: !this.state.isLoggedIn,
    })
  }

  handleChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    
    this.setState({
      [name]: value,
    })

    console.log(this.state);
  }

  render() {

    const {isLoggedIn, name, email, number, isSearching, chartData} = this.state;

    return (
      <div>
      
        <BrowserRouter>
          <React.Fragment>
          <Navigation/>
          <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/new" component={NewRoute} />
            <Route path="/calculator" component={Calculator} />
            <Route path="/chart" render={ () => <Chart chartData={chartData}/> } />
            <Route component={Unknown} />
          </Switch>
          </React.Fragment>
        </BrowserRouter>

        <ErrorBoundary>
          <BuggyButton />
          {
            isLoggedIn &&
            <button onClick={this.handleLogin}>Logout</button> ||
            <button onClick={this.handleLogin}>Login</button>
          }
          <h1>Welcome.</h1>
          
          Name:<input 
            name="name"
            type="textfield"
            value={name}
            onChange={this.handleChange}
          />
          <br />
          Email:<input 
            name="email"
            type="textfield"
            value={email}
            onChange={this.handleChange}
          />
          <br />
          Number:<input 
            name="number"
            type="number"
            value={number}
            onChange={this.handleChange}
          />
          <br />
          Searching?:<input 
            name="isSearching"
            type="checkbox"
            value={isSearching}
            onChange={this.handleChange}
          />
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