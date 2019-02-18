import React from 'react';

import styles from './style.scss';

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      word: '',
      searchResults: '',
      allData: '',
      selectedProduct: {}
    };
    this.saveText = this.saveText.bind(this);
    this.searchText = this.searchText.bind(this);
    this.selectProduct = this.selectProduct.bind(this);
  }

  saveText(e) {
    this.setState({ word: e.target.value });
  }


  selectProduct(event) {
    // console.log(event.currentTarget.textContent);
    // console.log(this.state.allData);
    let selected = this.state.allData.items.filter(item => {
      return (item.name == event.currentTarget.textContent);
    });
    // console.log(selected[0]);
    this.setState({ selectedProduct: selected[0] });
    this.props.onChange(selected[0]);
  } 

  searchText() {
    var reactThis = this;
  
    var reqListener = () => {
      console.log(this.responseText);
      const data = JSON.parse( this.responseText );
      console.log(data);
    }

    let query = this.state.word;
    let url = `http://localhost:3000/query?search=${query}`

    fetch(url)
    .then(
      function(response) {
        if (response.status !== 200) {
          console.log('Looks like there was a problem. Status Code: ' +
            response.status);
          return;
        }

        // Examine the text in the response
        response.json().then(function(data) {
          console.log(data);
          let searchResults = data.items.map(item => {
            return <li onClick={reactThis.selectProduct}>{item.name}</li>
          });
          reactThis.setState({ searchResults: searchResults });
          reactThis.setState({ allData: data });
        });
      }
    )
    .catch(function(err) {
      console.log('Fetch Error :-S', err);
    });
  } 
  
  render() {
    return (
      <div className="col">
        <input className={styles.name} onChange={this.saveText}/>
        <button onClick={this.searchText} className="btn btn-primary">Search</button>

        <p>Searching For: {this.state.word}</p>
        <ul>
          {this.state.searchResults}
        </ul>
      </div>
    );
  }
}

export default Form;
