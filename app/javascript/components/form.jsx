import React from 'react';

class Form extends React.Component {

  constructor(){
    super();

    this.state = {
        message:'banananana default message',
        noticeAgreed:false,
        clicked:false
    };
  }

  setAgree(){
    this.setState({
        noticeAgreed:!this.state.noticeAgreed,
        message: this.state.message + Math.random()
    })
  }

  clickHandler(){

    this.setState({clicked:!this.state.clicked})
  }

  render() {
    console.log("rendering form")

    if( this.state.clicked === true ){
        var formClass = 'form-active';
    }else{
        var formClass = 'form'
    }

    return (
      <div className={formClass}>
        <button onClick={()=>{this.clickHandler()}}>click to change</button>
        <input />
        <p>
            notice agreed: {this.state.noticeAgreed+''}
        </p>
      </div>
    );
  }
}




export default Form;