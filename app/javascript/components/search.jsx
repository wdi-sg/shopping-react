import React from 'react';
import SearchInput from './search/searchinput';
import SearchResult from './search/searchresult';

class Search extends React.Component {

  liftInput(v){
    this.refs.childInputvalue.putInputValue(v);
  }

  liftResult(v){
    console.log(v)
  }


  render() {
    return (
      <div>
        <h2>Search</h2>
        <SearchInput
          searchInput={(v) => {this.liftInput(v)}}
        />
        <SearchResult
          ref='childInputvalue'
          liftResult={(v) => {this.liftResult(v)}}
        />
      </div>
    );
  }
}
export default Search;