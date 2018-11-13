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

    let listItems;

    let products = this.props.output;

    if(this.props.output) {
        listItems = products.map((item, index) => {
            return(<li key={index}>{item.name}<br />
                <img src={item.mediumImage} /></li>);
        })
    };

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

export default Form;
