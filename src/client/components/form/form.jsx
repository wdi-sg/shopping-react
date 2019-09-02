import React from 'react';

import styles from './style.scss';

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      queryData: [],
    };
    this.handleClick=this.handleClick.bind(this)
  }

  handleClick(){
      //copy the value of this in order to refer to it in another way.
  var reactThis = this;

  var reqListener = function(){
   console.log(this.responseText);

   //transform the response to real js objects
   const data = JSON.parse( this.responseText );

   // here, we can't do this.setState

   //refer to react state instead
   reactThis.setState({queryData:data.products});
   // this.setState({queryData: data.products})
  }

  var oReq = new XMLHttpRequest();
  oReq.addEventListener("load", reqListener);
  oReq.open("GET", "http://localhost:3000/products");
  oReq.send();
  }

  render() {
    return (
      <div>
        <input className={styles.name} />
        <button onClick={this.handleClick}>Search</button>
        <Search searchresult={this.state.queryData}/>
      </div>
    );
  }
}


class Search extends React.Component {

    render() {

    console.log("rendering");
    return (
        <div className="list">
                    <table>
                        <tbody>
                        {this.props.searchresult.map((result,index)=>
                            <tr>
                                <td>{result.name}</td>
                            </tr>)
                        }
                        </tbody>
                    </table>

            </div>
    )};
}
export default Form;