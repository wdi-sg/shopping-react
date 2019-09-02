import React from 'react';

import styles from './style.scss';

class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      monkey: 'haha',
      word: '',
      counter: 0
    };
  }



    render() {
        console.log("RENDERING SEARCH RESULTS");


        return (
          <div>
            <p>{this.state.monkey}</p>
            <input className={styles.name} onChange={(event)=>{this.changeHandler(event)}} value={this.state.word} />
            <button onClick={()=>{this.doSearch()}}>Search</button>
            <ul>
                {listItems}
            </ul>
          </div>
        );
    }
}

export default Search;