import React from 'react';

export class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      textInput: '',
      searchResultsArr: []
    };
    this.makeAJAXCall = this.makeAJAXCall.bind(this);
  }

  //Triggers everytime text<input> 'changes'
  makeAJAXCall(e) {
    const entry = e.target.value;
    this.setState({
      textInput: entry
    });

    fetch(`/products/query?search=${entry}`)
      .then((response) => response.json())
      .then((data) => {
        const resultsArr = data.products; //[]
        this.setState({searchResultsArr: resultsArr});
      })
      .catch(function(error) {
        console.log('Fetch Error', error);
      });
  }

  render() {
    var liElements = this.state.searchResultsArr.map((product) => {
      return <li>{product.name}</li>;
    });

    return (
      <div>
        <input type="text" value={this.state.textInput} onChange={this.makeAJAXCall} />
        <ul>{liElements}</ul>
      </div>
    );
  }
}
