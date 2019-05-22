import React from 'react';

import styles from './style.scss';

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      query: "",
    };

    this.changeHandler = this.changeHandler.bind(this);
  }

    changeHandler(event) {
        this.setState({query: event.target.value});
        // console.log("change", event.target.value);
        this.props.searchHandler(this.state.query);
    }

  render() {

    return (
      <div>
        <p>Search: </p>
        <input
            className={styles.input}
            placeholder="Enter product here"
            onChange={() => this.changeHandler(event)}
            value={this.state.query}
        />
      </div>
    );
  }
}

export default Form;