import React from 'react';

import styles from './style.scss';

class Form extends React.Component {
  constructor() {
    super();
    this.changeHandler = this.changeHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
    this.state = {
      items: [],
      search: '',

    };
  }

  changeHandler(event){
    this.setState({search: event.target.value})
  }

  submitHandler(event){
    console.log(this.state.search)
  }

  render() {
    let itemList = this.state.items.map((item)=>{
      return <p>{item.name}</p>
    })
    return (
      <div>
        <input className={styles.name} placeholder="Search for items.." onChange={this.changeHandler} value={this.state.search}/>
        <button onClick={this.submitHandler}>Submit</button>
        {itemList}
      </div>
    );
  }
}

export default Form;
