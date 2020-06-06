import React from 'react';
import SearchInput from './search/searchinput';
import SearchResult from './search/searchresult';
import Divider from '@material-ui/core/Divider';


class Search extends React.Component {

  liftInput(v){
    this.refs.putInputvalue.putInputValue(v);
  }

  liftClickResult(v){
    this.props.liftClickResult(v)
  }


  render() {
    return (
      <div>
        <h2 className='border-b'>Search field</h2>
        <SearchInput
          searchInput={(v) => {this.liftInput(v)}}
        />
        <br/>
        <SearchResult
          ref='putInputvalue'
          liftClickResult={(v) => {this.liftClickResult(v)}}
        />
      </div>
    );
  }
}
export default Search;