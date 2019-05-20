import React from 'react';
import { hot } from 'react-hot-loader';

import Counter from './components/counter/counter';
import Form from './components/form/form';

import Navbar from './components/home/navbar';
import Search from './components/search/search';
import DisplaySearchProducts from './components/product/displaySearchProducts';



class App extends React.Component {
  constructor() {
    super();
    this.state = {
      message: 'hello',
    };
  }

  render() {
    return (
      <div className="container">

        <div className="col" id="col-one">
            <Search />
        </div>

        <div className="col" id="col-two">
        </div>

        <div className="col" id="col-three">
        </div>

      </div>
    );
  }
}

export default hot(module)(App);