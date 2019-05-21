import React from 'react';

// import styles from './style.scss';

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      searchForm: '',
      queryData: []
    };
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onClickHandler = this.onClickHandler.bind(this);
  }


  onChangeHandler(event){
    this.setState({
      searchForm: event.target.value
    });
}

  onClickHandler() {

  //copy the value of this in order to refer to it in another way.
  var reactThis = this;
  
  var reqListener = function(){
   console.log(this.responseText);
   
   //transform the response to real js objects
   const queryData = JSON.parse( this.responseText );

   
   // here, we can't do this.setState
   
   //refer to react state instead
   reactThis.setState({queryData: queryData});
  }

  var oReq = new XMLHttpRequest();
  oReq.addEventListener("load", reqListener);
  oReq.open("GET", "/products");
  oReq.send();

    console.log(this.state.searchForm,"stuff is inside")

    fetch("/stuff",{
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      headers: {
          'Content-Type': 'application/json',
          // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify({data:this.state.searchForm2}), // body data type must match "Content-Type" header
    }).then(res=>{
      console.log(res)
    })


}
  render() {
    console.log('Form state', this.state);
    return (
      <div>
        <input onChange={this.onChangeHandler} value={this.state.searchForm} placeholder="search"/>
        <button onClick={this.onClickHandler}>Search</button>
          <ListItems queryData={this.state.queryData}/>  
      </div>
    );
  }
}


class ListItems extends React.Component {
  render() {
    console.log('Props ', this.props)
    let listItems;
    if(this.props.queryData.products && this.props.queryData.products.length > 0){
      listItems = this.props.queryData.products.map((item, index) => {
        return (
          <div key={index}>
            <li>{item.name}</li>
          </div>
        );
    });
    console.log('listitems', listItems)
    }
    
  return(
    <div>
      <ul>
        {listItems || 'No list items'}
      </ul>
    </div>
  )
}
  }

    


export default Form;
