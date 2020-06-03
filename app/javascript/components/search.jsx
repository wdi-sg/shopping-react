import React from 'react';
import SearchInput from './search/searchinput';
import SearchResult from './search/searchresult';


class Search extends React.Component {

  render() {

    return (
      <div>
        <h2>Search</h2>
        <SearchInput/>
        <SearchResult/>
      </div>
    );
  }
}
export default Search;