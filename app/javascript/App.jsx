import React from 'react';


import Search from './components/Search/Search';
import Display from './components/Display/Display';

class App extends React.Component {
  render() {
    return (
      <div>
        <Search />
        <Display />
      </div>
    );
  }
}

export default App;