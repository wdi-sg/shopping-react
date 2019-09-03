import React from 'react';
import { hot } from 'react-hot-loader';

import Counter from './components/counter/counter';
import Form from './components/form/form';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      message: 'hello',
    };
  }

  render() {
    return (
      <div class="container">

            <div class="row">
                    <div class="col">
                        <Form />
                    </div>

                    <div class="col">
                        <Counter message={this.state.message} />
                    </div>

                    <div class="col">
                    </div>
            </div>

      </div>
    );
  }
}

export default hot(module)(App);

      // <Search />
      // <Product />
      // <Cart />