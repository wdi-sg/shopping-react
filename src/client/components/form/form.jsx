import React from 'react';

import styles from './style.scss';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      button: ""
    };

  };


  render() {
    let products = this.props.output;

    let listItems = products.items.map((item, index) => {
        return(<ListItem key={index} prod={item} />);
    });

    console.log('query', this.state.query);
    console.log('output', this.props.output);
    return (
      <div>
        <p>Search for your item</p>
        <form onSubmit={this.props.request}>
            <input className={styles.name} onChange={(event) => this.props.input(event)} value={this.state.query} />
            <button type="submit" disabled={this.state.button} >Search</button>
        </form>
        <ul>{listItems}</ul>
      </div>
    );
  }
}

class ListItem extends React.Component {
  constructor(props) {
    super(props);
  };


  render() {

    return (
      <div>
        <li>{this.props.prod}</li>
      </div>
    );
  }
}

export default Form;
