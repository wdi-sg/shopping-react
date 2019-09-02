import React from 'react';

import styles from './style.scss';


class List extends React.Component {
    render() {
        let itemsElements = this.props.items.map((item, index) => {
          return <li key={index}>{item.name}</li>
        });
        return (
          <ul>
            {itemsElements}
          </ul>
        );
    }
}



class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      searchText: '',
        products: []
    };
  }


  componentDidMount() {
    fetch('http://localhost:3000/products')
      .then(data => data.json())
      .then((data) => { this.setState({ products: data.products }) });

      // const productsList = this.state.products.map;
  }


  changeHandler(event) {
    let currentValue = event.target.value;
    this.setState({searchText: currentValue});
    console.log("value: ", currentValue);
    // currentValue = this.state.searchText;
  }

  render() {
    return(
      <div>
        <h3>Search:</h3>
        <input className={styles.name} onChange={(event)=>{this.changeHandler(event);}} value={this.state.searchText}/>
        <List items={this.state.products} />
      </div>
    );
  }
}

export default Form;