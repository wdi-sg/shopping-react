import React from 'react';

import styles from './style.scss';

export class Search extends React.Component {
  constructor() {
    super();
    this.state = {
        items:['asdasdas'],
    };

    this.testCall = this.testCall.bind(this);
    this.testingCall = this.testingCall.bind(this);
    this.addName = this.addName.bind(this);
  }

  makeAjaxCall(){
    console.log("hello");

    //copy the value of this in order to refer to it in another way.
    console.log( "set state function");
    console.log( this.setState );

    // get a hold of component for react
    var reactThis = this; //why???

    var reqListener = function(){
      console.log("hello");
      console.log(this.responseText);
      console.log("hello");

      const data = JSON.parse( this.responseText );
      console.log(this.state);
      reactThis.setState({items:data.products})
      console.log(reactThis.state);

      // this keyword doesnt refer to component
      //this.setState({items:this.responseText})

    }

    var oReq = new XMLHttpRequest();
    oReq.addEventListener("load", reqListener);
    oReq.open("GET", "/products");
    oReq.send();
  }

    testCall() {
    console.log("TESTTSTTINNGGG");
    console.log("hello");

    //copy the value of this in order to refer to it in another way.
    console.log( "set state function");
    // console.log( this.setState );
    console.log(this.state);
    console.log(this.state);

    // get a hold of component for react
    var reactThis = this;

    var reqListener = function(){
      console.log("hello");
      console.log(this.responseText);
      console.log("hello");

      const data = JSON.parse( this.responseText );
      console.log(data);
      // this.setState({items:data.products})
      // reactThis.setState({items:data})
      console.log(reactThis.state);
      reactThis.setState({
        items: data.products
      })
     console.log(reactThis.state);

      // this keyword doesnt refer to component
      //this.setState({items:this.responseText})

    }

    var oReq = new XMLHttpRequest();
    oReq.addEventListener("load", reqListener);
    oReq.open("GET", "/test");
    oReq.send();
    }

    testingCall() {
    console.log("TESTTSTTINNGGG");
    console.log("hello");

    //copy the value of this in order to refer to it in another way.
    console.log( "set state function");
    // console.log( this.setState );
    console.log(this.state);
    console.log(this.state);

    // get a hold of component for react
    var reactThis = this;

    var reqListener = function(){
      console.log("hello");
      console.log(this.responseText);
      console.log("hello");

      const data = JSON.parse( this.responseText );
      console.log(data);
      // this.setState({items:data.products})
      // reactThis.setState({items:data})
      console.log(reactThis.state);
      reactThis.setState({
        items: data.products
      })
     console.log(reactThis.state);

      // this keyword doesnt refer to component
      //this.setState({items:this.responseText})

    }

    var oReq = new XMLHttpRequest();
    oReq.addEventListener("load", reqListener);
    oReq.open("GET", "/testing");
    oReq.send();
    }

    addName() {
        console.log("HIIIHHIIII")
    }

  render() {


    const testing = this.state.items.map((item)=>{
        return <li>{item.name}</li>
    });

    const test = this.state.items.map((item)=>{
        return <li>{item.name}</li>
    });

    const items = this.state.items.map((item, index)=>{
        return <li key={item.id}>
                {item.name}
                </li>
    });

    return (
      <div>
        <ul>
         {items}
        </ul>
        <p>YAY AND STUFF {this.state.monkey}</p>
        <button onClick={()=>{this.makeAjaxCall()}}> Show Products </button>
        <input className={styles.name} />
        <br /> <br />
        <button onClick={()=>this.testCall()}> Test Button </button>
        <p> {test} </p>

        <br /> <br />
        <button onClick={this.testingCall}> Testing Button </button>
        <p onClick={this.addName}> {testing} </p>

        <input type="text" name="name" />
      </div>
    );
  }
}