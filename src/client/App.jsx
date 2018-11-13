import React from 'react';
import {hot} from 'react-hot-loader';

import Search from './components/search/search';
import Item from './components/item/item';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
     item: ''
    };

    this.displayItem = this.displayItem.bind(this);

  }

  displayItem(value){
    this.setState({item: value})
  }

  render() {
    return (
      <div>
        Welcome.
        <Search display={this.displayItem} />
        <Item item={this.state.item}/>
      </div>
    );
  }
}

export default hot(module)(App);
