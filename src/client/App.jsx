import React from 'react';
import { hot } from 'react-hot-loader';

import Search from './components/search/search';

import styles from './style.scss';



class App extends React.Component {
    constructor() {
        super();
        this.state = {
            items: [],
            currentProduct: [],
            shoppingCart: []
        };
        this.ajaxCall = this.ajaxCall.bind(this);
    }

    ajaxCall() {
        var reactThis = this;

        var responseHandler = function() {
          const data = JSON.parse( this.responseText );
          reactThis.setState({items: data.products});
      }

      var request = new XMLHttpRequest();
      request.addEventListener("load", responseHandler);
      request.open("GET", "/products");
      request.send();
    }

  render() {
    return (
        <div className={styles.search}>
                <div className="row">
                    <div className="col">
                        <h4>Search</h4>
                     <Search ajaxCall={this.ajaxCall} />
                    </div>
                </div>
        </div>
    );
  }
}

export default hot(module)(App);