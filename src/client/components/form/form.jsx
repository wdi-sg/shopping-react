import React from 'react';

import styles from './style.scss';

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      monkey: 'haha'

    };
  }



    render() {



        return (
          <div>
            <p>{this.state.monkey}</p>
            <input className={styles.name} onChange={(event)=>{this.props.changeHandler(event)}} value={this.props.word} />
            <button onClick={(event)=>{this.props.doSearch(event)}}>Search</button>

          </div>
        );
    }
}

export default Form;