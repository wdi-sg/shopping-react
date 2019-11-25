import React from 'react';

class Search extends React.Component{
  constructor(){
    super()
    this.state = {
    products:null
    }
  }
  checkInput=(event)=>{
   console.log(event.target.value);
   let input = event.target.value;
   console.log('checkkkkk');
   this.setState({monkey: input});

 }

  onNameChange(event){
          console.log(event.target.value);
        if(event.target.value) {

        }
      }

    render(){

      return(

        <div>
          <input placeholder="search" onChange={()=>{this.onNameChange(event)}}/>
          <br/>
          <h1>huehue</h1>
          <input onChange={this.checkInput} />
        </div>
      )
    }
  }

export default Search
