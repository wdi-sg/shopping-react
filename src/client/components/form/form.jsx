import React from 'react';
import styles from './style.scss';
import ResultList from './resultList'

const axios= require('axios');
const url = `/query`;

class Form extends React.Component {
  constructor() {
    super();
    this.keyListener = this.keyListener.bind(this);
    this.state = {
      queryResults: []
    }
  }

  keyListener(event){
    if (event.keyCode === 13) {
      console.log("hi", event.target.value);

      axios.get(url, {
        params: {
          search: event.target.value,
          numItems: 25
        }
      }) 
        .then(response => {
          console.log(response.data);
          this.setState({queryResults: response.data.items})
        })
        .catch(error => {
          console.log("error", error);
        });
    }
  }

  render() {
    return (
      <React.Fragment>
        Just Write Something: 
        <input className={styles.name}  onKeyUp={this.keyListener}/>

        <ResultList queryResults={this.state.queryResults}/>
      </React.Fragment>
    );
  }
}

export default Form;
