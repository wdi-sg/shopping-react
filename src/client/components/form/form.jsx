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

    if(this.props.output) {
        let products = this.props.output;
        listItems = products.map((item, index) => {
            return(<div className="prod-list" onClick={(e) => this.props.selected(e)} ><li key={index} value={index}>{item.name}<br />
                <img src={item.mediumImage} /></li></div>);
        });
    };

   ;
    console.log('output', this.props.output);
    return (
      <div className={styles.form}>
        <p>Search for your item</p>
        <form className="search-results" onSubmit={this.props.request}>
            <input className={styles.name} onChange={(event) => this.props.input(event)} value={this.state.query} />
            <button type="submit" disabled={this.state.button} >Search</button>
        </form>
        <div className="dropdown">
            <button className="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown">sort by
            <span className="caret"></span></button>
            <ul className="dropdown-menu">
                <li><button onClick={(e) => this.props.sort(e)} value="name">Name</button></li>
                <li><button onClick={(e) => this.props.sort(e)} value="price">Price: from cheapest</button></li>
                <li><button onClick={(e) => this.props.sort(e)} value="ratings">Customer Ratings</button></li>
            </ul>
        </div>
        <ul>{listItems}</ul>
      </div>
    );
  }
}

export default Form;
