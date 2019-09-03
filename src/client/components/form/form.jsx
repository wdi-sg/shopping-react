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
        products: [],
        foundList: []
    };
    this.handleClick = this.handleClick.bind(this);
  }


  componentDidMount() {
    fetch('http://localhost:3000/products')
      .then(data => data.json())
      .then((data) => { this.setState({ products: data.products }) });
  }


  changeHandler(event) {
    let currentValue = this.state.searchText;
    currentValue = event.target.value;
    this.setState({searchText: currentValue});
    console.log("state: ", this.state.searchText);
  }

    handleClick(){
        // impt to bind function in constructor in order to call this.state keys.
        // alert(this.state.searchText);

        // return all product objects inside array
        // let all = this.state.products.map((item) => {
            // console.log(item);
        // });
        // let foundItems = this.state.foundList;
        let itemArray = this.state.products;
        let word = this.state.searchText;
        let foundItems = [];

        itemArray.map(item => {
            // console.log(item.name);
            // console.log (item.name.toLowerCase().includes(word));

            if (item.name.toLowerCase().includes(word.toLowerCase())) {
                console.log("*************");
                console.log("found:", item.name);
                foundItems.push(item.name);
                this.setState({foundList: foundItems});
            }
        });

        console.log(foundItems);

    }


  render() {
    return(
      <div>
        <h3>Search:</h3>
        <input className={styles.name} onChange={(event)=>{this.changeHandler(event);}} value={this.state.searchText}/>
        <button onClick={this.handleClick}>search</button>
        <List items={this.state.products} />
      </div>
    );
  }
}

export default Form;