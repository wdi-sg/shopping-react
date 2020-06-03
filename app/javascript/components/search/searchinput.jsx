import React from 'react';

class SearchInput extends React.Component {

  constructor(){
    super();
    this.state = {
      temp:'',
      productlist:[],
      errormsg:"",
    };
  }

  clickHandler(event){
    if(this.state.temp.length>1) {
      let temp = this.state.temp
      //this.props.currentMsg(this.state.temp)
      this.setState({
        productlist:[temp, ...this.state.productlist],
        temp:"",
        id:0,
        errormsg:"",
      });
      //button trigger reference

    } else {
      this.setState({errormsg:"Hello you need to type something"})
    }
  }

  changeHandler(event){
    //this.setState({word:event.target.value});
    console.log("change", event.target.value);
    let currentValue = event.target.value
    this.setState({
      temp: currentValue,
    })
  }

  deletelist(event){
    console.log('delete?')
    let index = event.target.value
    let list = this.state.todolist;
    list.splice(index,1)

    this.setState({
      productlist:list,
    })
  }

  componentDidMount() {
    var input = document.getElementById("inputBtn");
    input.addEventListener("keyup", function(event) {
      if (event.keyCode === 13) {
       event.preventDefault();
       document.getElementById("btnInput").click();
      }
    });
  }

  render() {

    let List
    if (this.state.productlist.length > 0) {
      List = this.state.productlist.map((list,index)=> {
        return (
          <div>
            <li key={list}>{list}</li>
            <button value={index} onClick={(event)=>{this.deletelist(event)}}>delete</button>
          </div>
        )
      });
    }

    return (
      <div>
        <h2> Search Input</h2>
        {List}
        <div>
          <input id="inputBtn" value={this.state.temp} onChange={(event)=>{this.changeHandler(event);}}/>
          <button id="btnInput" onClick={()=>{this.clickHandler()}}>Click</button>
        </div>
      </div>
      );
  }
}
export default SearchInput;