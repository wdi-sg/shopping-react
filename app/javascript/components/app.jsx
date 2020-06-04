import React from 'react';
import Search from './search';
import Product from './product';


class App extends React.Component {

  lifting() {

  }

  render() {

    return (
      <div>
        <h2> App file</h2>
        <Search/>
        <Product/>
      </div>
    );
  }
}
export default App;