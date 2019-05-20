import React from 'react';

import styles from './style.scss';

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
        items:[],
      monkey: 'haha',
    };
  }

  makeAjaxCall(){
    console.log("hello");

    //copy the value of this in order to refer to it in another way.
    console.log( "set state function");
    console.log( this.setState );

    // get a hold of component for react
    var reactThis = this;

    var reqListener = function(){
      console.log("hello");
      console.log(this.responseText);
      console.log("hello");

      const data = JSON.parse( this.responseText );

      reactThis.setState({items:data.products})

      // this keyword doesnt refer to component
      //this.setState({items:this.responseText})

    }

    var oReq = new XMLHttpRequest();
    oReq.addEventListener("load", reqListener);
    oReq.open("GET", "/products");
    oReq.send();

  }

  render() {

    const items = this.state.items.map((item)=>{

        return <p>{item.name}</p>
    });
    return (
      <div>
        {items}
        <p>YAY AND STUFF {this.state.monkey}</p>
        <button onClick={()=>{this.makeAjaxCall()}}>make ajax call</button>
        <input className={styles.name} />
      </div>
    );
  }
}

export default Form;