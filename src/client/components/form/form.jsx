import React from 'react';

import styles from './style.scss';

class Form extends React.Component {
  constructor() {
    super();
    this.state = {

    };

    }


  render() {

    const resultItems = this.props.result.map((item,index)=>{
        console.log("form result", {item});
        return <div className={styles.showproduct} key={index}>
               <p>{item.name}</p>
               </div>
    });

    return (
      <div className={styles.searchform}>
        <h3>What are you searching for?</h3>
        <input id={styles.inputstyle} type="text" value={this.props.query} onChange={this.props.getItem} placeholder="Search for..."/>
        <input type="submit" onClick={this.props.submit} />
        <h3>Search Result:</h3>

        {resultItems}

      </div>
    );
  }
}

export default Form;