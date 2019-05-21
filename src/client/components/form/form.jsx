//<Form /> is child of <App />
import React from 'react';

import styles from './style.scss';

class Form extends React.Component {
  constructor() {
    super();
    //Declaring a var to store search results in items(arr)
    this.state = {
      items: [],
      monkey: 'haha'
    };
    // this.makeAJAXCall = this.makeAJAXCall.bind(this);
  }

  //Method to make AJAX call
  makeAJAXCall() {
    //Store this which refers to Component..
    var reactThis = this;

    var reqListener = function() {
      const data = JSON.parse(this.responseText);
      console.log(`line 24`, data);
      //this doesn't refer to Component..
      reactThis.setState({
        items: data.products
      });
    };

    var oReq = new XMLHttpRequest();
    oReq.addEventListener('load', reqListener);
    oReq.open('GET', '/products');
    oReq.send();
  }

  render() {
    // console.log(`line 37`, items);
    const items = this.state.items.map((item) => {
      return <p>{item.name}</p>;
    });

    return (
      <div>
        {items}
        <p>{this.state.monkey}</p>
        <input className={styles.name} />
        <button
          onClick={() => {
            this.makeAJAXCall();
          }}
        >
          make ajax call
        </button>
      </div>
    );
  }
}

export default Form;
