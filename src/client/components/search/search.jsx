import React from 'react';

import styles from './style.scss';

class Search extends React.Component {
  render() {
    return (
      <div>
        Search Component
        <Form doSearch={this.props.doSearch}/>
        <SearchResults 
              showProduct={this.props.showProduct} 
              searchResults={this.props.searchResults}
        />
      </div>
    );
  }
}

class Form extends React.Component {
  render() {
    return (
      <React.Fragment>
        <input 
              type="text"
        /> 
        <button 
              className="btn btn-success"
              onClick={ this.props.doSearch }> Search </button>
        
      </React.Fragment>
    );
  }
}

class SearchResults extends React.Component {
  showProduct(event, product){
    console.log("add it!!!!!==> "+product.name);
    this.props.showProduct(product);
  }

  render() {
    let searchResults = this.props.searchResults.map( (result, id) => {
      return (
        <li key={id} className="list-group-item">
          <p>{result.name}</p> 
          <button 
              onClick={(event)=>{this.showProduct(event, result)}}>
              View Product
          </button>
        </li>
      )
    });  

    return (
      <div className="searchResults">
        <h1>Search Results</h1>
        <ul>
          {searchResults}   
        </ul>
      </div>
    );
  }
}


export default Search;






// class MyComponent extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       error: null,
//       isLoaded: false,
//       items: []
//     };
//   }

//   componentDidMount() {
//     fetch("http://127.0.0.1:3000/products")
//       .then(res => res.json())
//       .then(
//         (result) => {
//           this.setState({
//             isLoaded: true,
//             items: result.products
//           });
//         },
//         // Note: it's important to handle errors here
//         // instead of a catch() block so that we don't swallow
//         // exceptions from actual bugs in components.
//         (error) => {
//           this.setState({
//             isLoaded: true,
//             error
//           });
//         }
//       )
//   }

//   render() {
//     const { error, isLoaded, items } = this.state;
//     if (error) {
//       return <div>Error: {error.message}</div>;
//     } else if (!isLoaded) {
//       return <div>Loading...</div>;
//     } else {
//       return (
//         <ul>
//           {items.map(item => (
//             <li key={item.name}>
//               {item.name} {item.price}
//             </li>
//           ))}
//         </ul>
//       );
//     }
//   }
// }
// <MyComponent/>